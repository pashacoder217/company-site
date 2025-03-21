import type React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if the user is authenticated
  const isAuthenticated = cookies().has("admin_authenticated")
  const path = cookies().get("next-url")?.value || ""

  // Don't redirect on the login page itself
  if (path === "/admin") {
    return <>{children}</>
  }

  // For all other admin routes, check authentication
  if (!isAuthenticated && path.startsWith("/admin/")) {
    redirect("/admin")
  }

  // No layout for login page
  if (path === "/admin") {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-af-black text-white">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-950">{children}</main>
      </div>
    </div>
  )
}

