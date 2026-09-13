// app/admin/page.tsx
"use client";
import { useEffect, useState } from "react";
import { mockData } from "../../lib/mockData";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await mockData.getDashboardStats();
      setStats(data);
    }
    load();
  }, []);

  if (!stats) return <p className="p-4">Loading dashboard...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="space-y-2">
        <li>Total Issues: {stats.total}</li>
        <li>Open: {stats.open}</li>
        <li>In Progress: {stats.inProgress}</li>
        <li>Resolved: {stats.resolved}</li>
        <li>Escalated: {stats.escalated}</li>
        <li>Resolution Rate: {(stats.resolutionRate * 100).toFixed(1)}%</li>
        <li>Avg Resolution Days: {stats.avgResolutionDays}</li>
      </ul>
    </div>
  );
}
