"use client";

import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    Calendar,
    Settings,
    Bell,
    Search,
    Menu,
    ChevronRight,
    LogOut,
    Building,
    BarChart3
} from 'lucide-react';

export default function AdminDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const stats = [
        { title: "Visitas Hoje", value: "124", change: "+12%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Agendamentos", value: "4", change: "2 Pendentes", icon: Calendar, color: "text-green-600", bg: "bg-green-50" },
        { title: "Nota Google", value: "5.0", change: "Perfeito", icon: BarChart3, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    const recentLeads = [
        { name: "Ana Souza", service: "Fisioterapia Geral", time: "10 min atrás", status: "Novo" },
        { name: "Carlos Lima", service: "Pilates", time: "2 horas atrás", status: "Confirmado" },
        { name: "Beatriz M.", service: "RPG", time: "5 horas atrás", status: "Concluído" },
        { name: "João Pedro", service: "Fisioterapia Esportiva", time: "Ontem", status: "Cancelado" },
    ];

    return (
        <div className="flex h-screen bg-gray-50 font-sans text-gray-900">

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-center h-16 border-b border-gray-100">
                    <h1 className="text-xl font-bold tracking-tight text-emerald-600">Fisio<span className="text-gray-900">Vitalitá</span></h1>
                </div>

                <nav className="p-4 space-y-1">
                    <SidebarItem icon={LayoutDashboard} label="Visão Geral" active />
                    <SidebarItem icon={Users} label="Pacientes" />
                    <SidebarItem icon={Calendar} label="Agenda" />
                    <div className="pt-4 pb-2">
                        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Gestão</p>
                    </div>
                    <SidebarItem icon={Building} label="Unidades" />
                    <SidebarItem icon={Settings} label="Configurações" />
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
                    <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                        <LogOut className="w-5 h-5 mr-3 text-gray-400" />
                        Sair do Sistema
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Top Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="flex-1 max-w-lg mx-auto lg:mx-0 hidden lg:block">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </span>
                            <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-emerald-500 transition duration-150 ease-in-out sm:text-sm" placeholder="Buscar paciente..." />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 relative">
                            <Bell className="w-5 h-5 text-gray-500" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">DR</div>
                            <span className="text-sm font-medium text-gray-700 hidden md:block">Dr. Matheus</span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 lg:p-8">

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Bom dia, Dr. Matheus 👋</h2>
                        <p className="text-gray-500 mt-1">Aqui está o resumo da sua clínica hoje.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${stat.bg}`}>
                                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity Table */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h3 className="text-lg font-semibold text-gray-800">Últimos Contatos do Site</h3>
                            <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700 flex items-center">
                                Ver todos <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-50">
                                        <th className="px-6 py-4 font-medium">Nome</th>
                                        <th className="px-6 py-4 font-medium">Interesse</th>
                                        <th className="px-6 py-4 font-medium">Data</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {recentLeads.map((lead, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{lead.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{lead.service}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{lead.time}</td>
                                            <td className="px-6 py-4">
                                                <StatusBadge status={lead.status} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${active ? 'bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <Icon className={`w-5 h-5 mr-3 ${active ? 'text-emerald-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
            {label}
        </button>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: { [key: string]: string } = {
        "Novo": "bg-blue-100 text-blue-700",
        "Confirmado": "bg-emerald-100 text-emerald-700",
        "Concluído": "bg-gray-100 text-gray-700",
        "Cancelado": "bg-red-100 text-red-700"
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border border-transparent ${styles[status] || styles["Novo"]}`}>
            {status}
        </span>
    );
}
