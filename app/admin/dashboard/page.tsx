import { cookies } from "next/headers"
import AdminHeader from "@/components/admin/admin-header"
import DashboardStats from "@/components/admin/dashboard-stats"
import UpcomingAppointments from "@/components/admin/upcoming-appointments"
import RecentActivities from "@/components/admin/recent-activities"

export default function DashboardPage() {
  const cookieStore = cookies()
  const name = cookieStore.get("admin_name")?.value || "Admin"

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <AdminHeader title="Dashboard" subtitle={`Welcome back, ${name}`} />

      <div className="mt-6">
        <DashboardStats />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpcomingAppointments />
        </div>
        <div>
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}

