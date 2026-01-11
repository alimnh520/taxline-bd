'use client'
import { PieChart, Pie, Cell } from "recharts";
import React, { useState } from "react";
import {
    LayoutDashboard, Package, Users, FileText, Camera, BarChart3, LogOut,
    Bell, ChevronDown, Moon, Sun,
    Video,
    Book
} from "lucide-react";
import { motion } from "framer-motion";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line
} from "recharts";
import PackageAnalyticsPage from "./Package";
import CourseDashboard from "./VideoCourse";
import LearnCourse from "./LearnCourse";

const kpi = {
    totalUsers: 2450,
    newUsersToday: 38,
    premiumUsers: 640,
    totalRevenue: 185000,
    packages: {
        free: 1320,
        basic: 490,
        premium: 640
    }
};

const pieData = [
    { name: "Free", value: kpi.packages.free },
    { name: "Basic", value: kpi.packages.basic },
    { name: "Premium", value: kpi.packages.premium },
];

const PIE_COLORS = ["#22c55e", "#3b82f6", "#a855f7"];


const monthlyData = [
    { month: "Jan", users: 120, revenue: 8000, premium: 40 },
    { month: "Feb", users: 180, revenue: 12000, premium: 70 },
    { month: "Mar", users: 260, revenue: 18500, premium: 110 },
    { month: "Apr", users: 420, revenue: 32000, premium: 190 },
    { month: "May", users: 610, revenue: 54000, premium: 260 },
    { month: "Jun", users: 860, revenue: 78000, premium: 390 },
];

const sidebarItems = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "package", label: "Package", icon: Package },
    { key: "course", label: "Video Course", icon: Video },
    { key: "learn", label: "Learning Course", icon: Book },
    { key: "client", label: "Client", icon: FileText },
    { key: "documents", label: "Documents", icon: Camera },
    { key: "report", label: "Report", icon: BarChart3 },
    { key: "logout", label: "Logout", icon: LogOut },
];

const stats = [
    { title: "Total Users", value: kpi.totalUsers, color: "from-blue-500 to-cyan-500" },
    { title: "New Today", value: `+${kpi.newUsersToday}`, color: "from-green-500 to-emerald-500" },
    { title: "Premium Users", value: kpi.premiumUsers, color: "from-purple-500 to-pink-500" },
    { title: "Total Revenue", value: `৳${kpi.totalRevenue}`, color: "from-orange-500 to-amber-500" },
];


const chartData = [
    { name: "Jan", users: 200, income: 1200 },
    { name: "Feb", users: 350, income: 2100 },
    { name: "Mar", users: 500, income: 3500 },
    { name: "Apr", users: 700, income: 4800 },
    { name: "May", users: 900, income: 6200 },
    { name: "Jun", users: 1200, income: 8000 },
];


export default function AdminDashboard() {
    const [active, setActive] = useState("dashboard");
    const [dark, setDark] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    return (
        <div className={dark ? "dark" : ""}>
            <div className="flex h-screen overflow-y-auto bg-gray-100 dark:bg-gray-950">

                {/* Sidebar */}
                <aside className="w-72 bg-white dark:bg-gray-900 border-r dark:border-gray-800 hidden md:flex flex-col fixed h-full">
                    <div className="p-6 border-b dark:border-gray-800">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                            TaxLine Admin
                        </h1>
                    </div>

                    <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
                        {sidebarItems.map(it => {
                            const Icon = it.icon;
                            const isActive = active === it.key;
                            return (
                                <button
                                    key={it.key}
                                    onClick={() => setActive(it.key)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition
                                    ${isActive
                                            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {it.label}
                                </button>
                            )
                        })}
                    </nav>
                </aside>

                {/* Main */}
                <div className="flex-1 ml-72 flex flex-col">

                    {/* Topbar */}
                    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-10">

                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                            {sidebarItems.find(i => i.key === active)?.label}
                        </h2>

                        <div className="flex items-center gap-4">

                            {/* Theme */}
                            <button onClick={() => setDark(d => !d)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                {dark ? <Sun /> : <Moon />}
                            </button>

                            {/* Notification */}
                            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <Bell />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Profile */}
                            <div className="relative">
                                <button
                                    onClick={() => setOpenProfile(p => !p)}
                                    className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <img
                                        src="/logos/547777440_668007619127256_3503730407665985454_n.png"
                                        className="w-9 h-9 rounded-full border"
                                    />
                                    <ChevronDown />
                                </button>

                                {openProfile && (
                                    <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden">
                                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Profile</button>
                                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Settings</button>
                                        <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800">Logout</button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </header>

                    {/* Content */}

                    {active === 'dashboard' && (

                        <div className="flex-1 overflow-auto p-6 space-y-6">

                            {/* Stat cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className={`p-5 rounded-2xl text-white bg-gradient-to-r ${s.color} shadow-lg`}
                                    >
                                        <p className="text-sm opacity-80">{s.title}</p>
                                        <h2 className="text-2xl font-bold">{s.value}</h2>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Charts */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                                <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl">
                                    <h3 className="font-semibold mb-4">Users Growth</h3>
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={monthlyData}>
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Line type="monotone" dataKey="users" stroke="#22c55e" strokeWidth={3} name="Total Users" />
                                                <Line type="monotone" dataKey="premium" stroke="#a855f7" strokeWidth={3} name="Premium Users" />
                                            </LineChart>

                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl">
                                    <h3 className="font-semibold mb-4">Revenue</h3>
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={monthlyData}>
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                                            </BarChart>

                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl">
                                    <h3 className="font-semibold mb-4">Package Distribution</h3>
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie data={pieData} dataKey="value" outerRadius={100} label>
                                                    {pieData.map((_, i) => (
                                                        <Cell key={i} fill={PIE_COLORS[i]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )}

                    {active === 'package' && <PackageAnalyticsPage dark={dark} />}
                    {active === 'course' && <CourseDashboard dark={dark} />}
                    {active === 'learn' && <LearnCourse dark={dark}/>}

                </div>
            </div>
        </div>
    );
}
