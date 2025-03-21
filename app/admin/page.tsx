import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import AdminLoginForm from "@/components/admin/admin-login-form"

export default function AdminPage() {
  // Check if the user is already logged in
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.has("admin_authenticated")

  // If authenticated, redirect to dashboard
  if (isAuthenticated) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-af-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-af-gold font-playfair mb-2">Admin Panel</h1>
          <p className="text-gray-400">af 39 hive Staff Portal</p>
        </div>

        <AdminLoginForm />

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Authorized personnel only.</p>
          <p>For access issues, please contact the system administrator.</p>
        </div>
      </div>
    </div>
  )
}

