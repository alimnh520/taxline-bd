'use client'

import React, { useMemo, useState, useEffect } from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line
} from "recharts";
import { Package, DollarSign, TrendingUp } from "lucide-react";

export default function CourseDashboard({dark}) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [range, setRange] = useState(1);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch("/api/user/subscribe/course");
                const data = await res.json();
                if (data.success) {
                    setOrders(data.data);
                }
            } catch (err) {
                console.error("Failed to load courses", err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    function isWithin(dateStr, days) {
        const d = new Date(dateStr);
        const now = new Date();
        const diff = (now - d) / (1000 * 60 * 60 * 24);
        return diff <= days;
    }

    const filteredOrders = useMemo(() => {
        return orders.filter(o =>
            o.paymentStatus === "paid" &&
            isWithin(o.createdAt || o.purchaseDate, range)
        );
    }, [orders, range]);

    const totalRevenue = filteredOrders.reduce((s, o) => s + o.amount, 0);

    // ===== Trend Data =====
    const trendData = useMemo(() => {
        const map = {};
        filteredOrders.forEach(o => {
            const d = new Date(o.createdAt || o.purchaseDate).toLocaleDateString();
            if (!map[d]) map[d] = 0;
            map[d] += o.amount;
        });

        return Object.keys(map).map(date => ({
            date,
            sales: map[date],
        }));
    }, [filteredOrders]);

    // ===== Bar chart data =====
    const barData = [
        { name: "Course Sales", value: filteredOrders.length }
    ];

    if (loading) {
        return <div className="p-10 text-center text-xl">Loading course dashboard...</div>;
    }

    return (
        <div className="p-6 space-y-6 bg-gray-300">

            {/* ===== Header ===== */}
            <div className="flex justify-end gap-2">
                {[1, 7, 30].map(d => (
                    <button
                        key={d}
                        onClick={() => setRange(d)}
                        className={`px-4 py-2 rounded-lg border ${range === d ? "bg-green-600 text-white" : "bg-white"}`}
                    >
                        {d === 1 ? "Today" : `Last ${d} Days`}
                    </button>
                ))}
            </div>

            {/* ===== Summary Cards ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Sales" value={filteredOrders.length} icon={<Package />} />
                <StatCard title="Total Revenue" value={`৳ ${totalRevenue}`} icon={<DollarSign />} />
                <StatCard title="Avg Sale" value={`৳ ${filteredOrders.length ? Math.round(totalRevenue / filteredOrders.length) : 0}`} icon={<TrendingUp />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Bar */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-bold mb-4">Course Sales Count</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Bar dataKey="value" fill="#22c55e" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Line */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-bold mb-4">Sales Trend</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trendData}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Sales Table */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-bold mb-4">Recent Course Sales</h3>

                    <div className="overflow-y-auto max-h-[300px] border rounded-md">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 sticky top-0">
                                <tr className="text-left border-b">
                                    <th className="py-2 px-2">User</th>
                                    <th className="px-2">Date</th>
                                    <th className="px-2">Time</th>
                                    <th className="px-2 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders
                                    .slice(-7)
                                    .reverse()
                                    .map(o => (
                                        <tr key={o._id} className="border-b hover:bg-gray-50 transition">
                                            <td className="py-3 flex items-center gap-3 px-2">
                                                <img src={o.avatar} className="w-9 h-9 rounded-full" />
                                                <span className="font-semibold">{o.name}</span>
                                            </td>

                                            <td className="px-2 text-gray-600">
                                                {new Date(o.createdAt || o.purchaseDate).toLocaleDateString("en-GB")}
                                            </td>

                                            <td className="px-2 text-gray-600">
                                                {new Date(o.createdAt || o.purchaseDate).toLocaleTimeString("en-US", {
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                    hour12: true
                                                })}
                                            </td>

                                            <td className="px-2 text-right font-bold text-green-600">
                                                ৳ {o.amount}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

            {/* ===== Total Sell Table (LIKE PACKAGE PAGE) ===== */}
            <div className="bg-gray-600 p-6 rounded-2xl shadow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Total Sell</h3>
                    <button
                        onClick={() => {
                            const printContents = document.getElementById('course-sell-table').innerHTML;
                            const originalContents = document.body.innerHTML;
                            document.body.innerHTML = printContents;
                            window.print();
                            document.body.innerHTML = originalContents;
                            window.location.reload();
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    >
                        Print
                    </button>
                </div>

                <div
                    id="course-sell-table"
                    className="overflow-y-auto max-h-[400px] border rounded-md bg-white"
                >
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 sticky top-0">
                            <tr className="text-left border-b">
                                <th className="py-2 px-2">User</th>
                                <th className="px-2">Mobile</th>
                                <th className="px-2">Date</th>
                                <th className="px-2">Time</th>
                                <th className="px-2 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(o => (
                                <tr key={o._id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 flex items-center gap-3 px-2">
                                        <img src={o.avatar} className="w-9 h-9 rounded-full" />
                                        <span className="font-semibold">{o.name}</span>
                                    </td>
                                    <td className="px-2">{o.mobile}</td>
                                    <td className="px-2">
                                        {new Date(o.createdAt || o.purchaseDate).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="px-2">
                                        {new Date(o.createdAt || o.purchaseDate).toLocaleTimeString("en-US", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true
                                        })}
                                    </td>
                                    <td className="px-2 text-right font-bold">৳ {o.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

function StatCard({ title, value, icon }) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-100 text-green-600">{icon}</div>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-xl font-bold">{value}</p>
            </div>
        </div>
    );
}
