"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CalendarDays, Users, Settings, Home, LogOut, Menu, X, BarChart3, MessageSquare } from "lucide-react"
import { logout } from "@/lib/auth-actions"
import { Button } from "@/components/ui/button"

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push("/admin")
    router.refresh()
  }

  const menuItems = [
    { path: "/admin/dashboard", name: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { path: "/admin/calendar", name: "Calendar", icon: <CalendarDays className="h-5 w-5" /> },
    { path: "/admin/staff", name: "Staff", icon: <Users className="h-5 w-5" /> },
    { path: "/admin/performance", name: "Performance", icon: <BarChart3 className="h-5 w-5" /> },
    { path: "/admin/notifications", name: "Notifications", icon: <MessageSquare className="h-5 w-5" /> },
    { path: "/admin/settings", name: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <li key={item.path}>
        <Link
          href={item.path}
          className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
            pathname === item.path
              ? "bg-studio-gold text-studio-black font-medium"
              : "text-gray-300 hover:text-white hover:bg-gray-800"
          }`}
          onClick={() => isMobile && setMobileOpen(false)}
        >
          <span className="mr-3">{item.icon}</span>
          {!collapsed && <span>{item.name}</span>}
        </Link>
      </li>
    ))
  }

  const sidebarContent = (
    <>
      <div
        className={`flex items-center ${collapsed ? "justify-center" : "justify-between"} px-4 py-5 border-b border-gray-800`}
      >
        <div className={`flex items-center ${collapsed ? "justify-center" : ""}`}>
          <div className="w-10 h-10 bg-studio-gold rounded-full flex items-center justify-center">
            <span className="font-bold text-studio-black">S39</span>
          </div>
          {!collapsed && (
            <h1 className="ml-3 text-xl font-bold font-playfair text-white">
              Studio 39 <span className="text-studio-gold">Admin</span>
            </h1>
          )}
        </div>

        {!isMobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-white"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "→" : "←"}
          </button>
        )}

        {isMobile && (
          <button onClick={() => setMobileOpen(false)} className="text-gray-400" aria-label="Close sidebar">
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">{renderMenuItems()}</ul>
      </div>

      <div className="border-t border-gray-800 p-4">
        <Button
          variant="outline"
          className={`w-full justify-center border-gray-700 hover:border-studio-gold hover:text-studio-gold ${
            collapsed ? "px-2" : ""
          }`}
          onClick={handleLogout}
        >
          <LogOut className={`h-5 w-5 ${collapsed ? "" : "mr-2"}`} />
          {!collapsed && <span>Sign Out</span>}
        </Button>
      </div>
    </>
  )

  // Mobile toggle button
  const mobileToggle = isMobile && (
    <button
      onClick={() => setMobileOpen(true)}
      className="fixed top-4 left-4 z-40 bg-studio-black p-2 rounded-md border border-gray-800 text-white"
      aria-label="Open menu"
    >
      <Menu className="h-6 w-6" />
    </button>
  )

  return (
    <>
      {mobileToggle}

      {/* Desktop sidebar */}
      {!isMobile && (
        <aside
          className={`bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col ${
            collapsed ? "w-16" : "w-64"
          }`}
        >
          {sidebarContent}
        </aside>
      )}

      {/* Mobile sidebar with overlay */}
      {isMobile && (
        <>
          {mobileOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileOpen(false)} />
          )}
          <aside
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out flex flex-col ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  )
}

