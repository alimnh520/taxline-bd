"use client";
import React, { useEffect, useState } from "react";
import { User, Package, ShoppingBag, RefreshCcw, Settings, LogOut } from "lucide-react";
import { ProfilePage } from "./Profile";

export default function DashboardPage() {
    const [userInfo, setUserInfo] = useState('');
    const [state, setState] = useState("dashboard");

    const user = {
        username: "Unknown User",
        totalOrders: 0,
        completeOrders: 0,
        pendingOrders: 0,
        totalPackages: 0,
        activePackages: 0,
        expiredPackages: 0,
    };
    const _id = userInfo ? userInfo.email.replace("@gmail.com", "") : "251106145";

    useEffect(() => {
        async function userInfoData() {
            try {
                const res = await fetch("/api/user/user-info", { method: 'GET' });
                const data = await res.json();
                if (data.success) setUserInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        userInfoData();
    }, []);

    const handleLogOut = async () => {
        try {
            const res = await fetch('/api/user/logout', { method: 'GET' });
            const data = await res.json();
            if (data.success) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-b-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        User <span className="text-green-600">Dashboard</span>
                    </h1>
                    <p className="text-xs text-gray-500">HOME / USER / DASHBOARD</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto mt-8 px-4 flex items-start justify-start gap-6">
                {/* Sidebar */}
                <div className="bg-white shadow rounded-2xl p-6 w-96">
                    <div className="text-center mb-6">
                        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                            {userInfo ? (<img src={userInfo.profileImage} alt="" />) : <User className="w-10 h-10 text-gray-400" />}

                        </div>
                        <h2 className="mt-4 text-lg font-semibold">{userInfo ? userInfo.username : user.username}</h2>
                        <p className="text-sm text-gray-500 truncate">{_id}</p>
                    </div>

                    <ul className="space-y-3">
                        <li className={`flex items-center gap-2 hover:bg-gray-100 ${state === "dashboard" ? "text-green-600 font-medium bg-green-50" : ""} p-2 rounded-lg`} onClick={() => setState('dashboard')}>
                            <Settings size={18} /> Dashboard
                        </li>
                        <li className={`flex items-center gap-2 hover:bg-gray-100 ${state === "profile" ? "text-green-600 font-medium bg-green-50" : ""} p-2 rounded-lg`} onClick={() => setState('profile')}>
                            <User size={18} /> Profile
                        </li>
                        <li className={`flex items-center gap-2 hover:bg-gray-100 ${state === "" ? "text-green-600 font-medium bg-green-50" : ""} p-2 rounded-lg`}>
                            <RefreshCcw size={18} /> My Returns
                        </li>
                        <li className={`flex items-center gap-2 hover:bg-gray-100 ${state === "" ? "text-green-600 font-medium bg-green-50" : ""} p-2 rounded-lg`}>
                            <Package size={18} /> My Packages
                        </li>
                        <li className={`flex items-center gap-2 hover:bg-gray-100 ${state === "" ? "text-green-600 font-medium bg-green-50" : ""} p-2 rounded-lg`}>
                            <ShoppingBag size={18} /> My Orders
                        </li>

                        <li className={`flex items-center gap-2 hover:bg-gray-100 text-green-600 font-medium p-2 rounded-lg`} onClick={handleLogOut}>
                            <LogOut size={18} /> Logout
                        </li>
                    </ul>
                </div>

                {/* Dashboard Stats */}
                {
                    state === "dashboard" && (
                        <div className="md:col-span-3 space-y-6 flex-1">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <StatCard title="Total Orders" value={user.totalOrders} />
                                <StatCard title="Complete Orders" value={user.completeOrders} />
                                <StatCard title="Pending Orders" value={user.pendingOrders} />
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4">
                                <StatCard title="Total Packages" value={user.totalPackages} />
                                <StatCard title="Active Packages" value={user.activePackages} />
                                <StatCard title="Expired Packages" value={user.expiredPackages} />
                            </div>


                        </div>
                    )
                }

                {state === "profile" && <ProfilePage userInfo={userInfo} />}

            </div>
            {/* Gov Links */}
            <div className="bg-white py-4 shadow rounded-2xl mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    প্রয়োজনীয় সরকারি লিংক
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        "ই-টিডিএস",
                        "ই-টিন রেজিস্ট্রেশন",
                        "এ-চালান",
                        "এনবিআর ওয়েবসাইট",
                        "সোনালী ব্যাংক পেমেন্ট",
                        "ই-রিটার্ন ওয়েবসাইট",
                        "রিটার্ন ভেরিফিকেশন",
                    ].map((label, i) => (
                        <button
                            key={i}
                            className="bg-red-600 hover:bg-red-700 text-white font-medium px-2 py-2 rounded-lg text-sm shadow-sm"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value }) {
    return (
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
            <p className="text-3xl font-bold text-green-600">{value}</p>
            <p className="text-gray-600 mt-2">{title}</p>
        </div>
    );
}
