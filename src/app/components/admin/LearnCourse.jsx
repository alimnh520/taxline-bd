'use client'

import React, { useMemo, useState, useEffect } from "react";

import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line,
    PieChart, Pie, Cell
} from "recharts";
import { Package, TrendingUp, Users, DollarSign } from "lucide-react";

export default function LearnCourse({ dark }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [range, setRange] = useState(1);
    const [activePackage, setActivePackage] = useState("all");


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch("/api/user/subscribe/learning", { method: 'GET' });
                const data = await res.json();

                if (data.success) {
                    setOrders(data.data);
                }
            } catch (err) {
                console.error("Failed to load orders", err);
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
            isWithin(o.createdAt || o.purchaseDate, range)
        );
    }, [orders, range]);


    const summary = useMemo(() => {
        return {
            mini: filteredOrders.filter(o => o.course === "mini"),
            max: filteredOrders.filter(o => o.course === "max"),
            ultra: filteredOrders.filter(o => o.course === "ultra"),
        };
    }, [filteredOrders]);

    const chartData = [
        { name: "Mini (6 Month)", value: summary.mini.length },
        { name: "Max (1 Year)", value: summary.max.length },
        { name: "Ultra (2 Year)", value: summary.ultra.length },
    ];


    const revenuePieData = [
        { name: "Mini (6M)", value: summary.mini.reduce((s, o) => s + o.amount, 0) },
        { name: "Max (1Y)", value: summary.max.reduce((s, o) => s + o.amount, 0) },
        { name: "Ultra (2Y)", value: summary.ultra.reduce((s, o) => s + o.amount, 0) },
    ];


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


    const totalRevenue = filteredOrders.reduce((s, o) => s + o.amount, 0);
    const tableData =
        activePackage === "all"
            ? filteredOrders
            : filteredOrders.filter(o => o.course === activePackage);


    if (loading) {
        return <div className="p-10 text-center text-xl">Loading dashboard...</div>;
    }


    return (
        <div className="p-6 space-y-6 bg-gray-300 dark:bg-gray-900">

            <div className="flex flex-col md:flex-row md:items-center justify-end gap-4">

                <div className="flex gap-2">
                    {[1, 7, 30].map(d => (
                        <button
                            key={d}
                            onClick={() => setRange(d)}
                            className={`px-4 py-2 rounded-lg border ${range === d ? "bg-green-600 text-white" : "bg-white"
                                }`}
                        >
                            {d === 1 ? "Today" : `Last ${d} Days`}
                        </button>
                    ))}
                </div>
            </div>

            {/* ===== Summary Cards ===== */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <StatCard title="Total Sales" value={filteredOrders.length} icon={<Package />} />
                <StatCard title="Total Revenue" value={`৳ ${totalRevenue}`} icon={<DollarSign />} />
                <StatCard title="Mini (6M)" value={summary.mini.length} />
                <StatCard title="Max (1Y)" value={summary.max.length} />
                <StatCard title="Ultra (2Y)" value={summary.ultra.length} />
            </div>

            {/* ===== Charts ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Bar */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-bold mb-4">Package Sales Count</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} tickCount={6} />
                                <Tooltip />
                                <Bar dataKey="value" fill="#22c55e" radius={[3, 3, 0, 0]} />
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

                {/* Pie */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-bold mb-4">Revenue Share</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={revenuePieData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={90}
                                    innerRadius={50}
                                    label
                                >
                                    {revenuePieData.map((_, i) => (
                                        <Cell key={i} fill={["#22c55e", "#3b82f6", "#a855f7"][i]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            {/* ===== Recent Activity ===== */}
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-600 col-span-2 p-6 rounded-2xl shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-white">Total Sell</h3>
                        <button
                            onClick={() => {
                                const printContents = document.getElementById('recent-activity-table').innerHTML;
                                const originalContents = document.body.innerHTML;
                                document.body.innerHTML = printContents;
                                window.print();
                                document.body.innerHTML = originalContents;
                                window.location.reload(); // page reload to restore JS behavior
                            }}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            Print
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-4">
                        {["all", "mini", "max", "ultra"].map(p => (
                            <button
                                key={p}
                                onClick={() => setActivePackage(p)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition
                    ${activePackage === p
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                            >
                                {p.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <div
                        id="recent-activity-table"
                        className="overflow-y-auto max-h-[400px] border rounded-md bg-white"
                    >
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 sticky top-0">
                                <tr className="text-left border-b">
                                    <th className="py-2 px-2">User</th>
                                    <th className="px-2">Mobile</th>
                                    <th className="px-2">Service</th>
                                    <th className="px-2">Date</th>
                                    <th className="px-2">Time</th>
                                    <th className="px-2 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData
                                    .filter(o => activePackage === "all" || o.course === activePackage)
                                    .map(o => (
                                        <tr key={o._id} className="border-b hover:bg-gray-50 transition">
                                            <td className="py-3 flex items-center gap-3 px-2">
                                                <img src={o.avatar} className="w-9 h-9 rounded-full" />
                                                <span className="font-semibold">{o.name}</span>
                                            </td>
                                            <td className="px-2 text-gray-700">{o.mobile ?? '019XXXXXXXX'}</td>
                                            <td className="px-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold
    ${o.course === "mini" && "bg-blue-100 text-blue-600"}
    ${o.course === "max" && "bg-green-100 text-green-600"}
    ${o.course === "ultra" && "bg-purple-100 text-purple-600"}
`}>
                                                    {o.course?.toUpperCase() || "N/A"}
                                                </span>
                                            </td>
                                            <td className="px-2 text-gray-500">
                                                {new Date(o.createdAt || o.purchaseDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-2 text-gray-500">
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



                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-bold mb-4">Recent Activity</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b">
                                    <th className="py-2">Image</th>
                                    <th>Name</th>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th className="text-right">Amount</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredOrders.slice(-7).map(o => (
                                    <tr key={o._id} className="border-b hover:bg-gray-50 transition">
                                        <td className="py-3">
                                            <img src={o.avatar} className="w-10 h-10 rounded-full" />
                                        </td>

                                        <td className="font-semibold w-20 truncate">{o.name}</td>

                                        <td>
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold
    ${o.course === "mini" && "bg-blue-100 text-blue-600"}
    ${o.course === "max" && "bg-green-100 text-green-600"}
    ${o.course === "ultra" && "bg-purple-100 text-purple-600"}
`}>
                                                {o.course?.toUpperCase() || "N/A"}
                                            </span>

                                        </td>

                                        <td className="text-gray-500">
                                            {new Date(o.createdAt || o.purchaseDate).toLocaleDateString()}
                                        </td>

                                        <td className="text-right font-bold">৳ {o.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
