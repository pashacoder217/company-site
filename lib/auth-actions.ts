"use server"

import { cookies } from "next/headers"

// In a real app, these would be stored in a database or environment variables
// This is a simple solution for demonstration purposes
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "studio39salon",
}

// Manager accounts would be stored in a database in a real application
const STAFF_CREDENTIALS = [
  {
    username: "manager",
    password: "manager123",
    role: "manager",
    name: "Anjali Sharma",
    whatsapp: "+919876543210",
  },
  {
    username: "stylist1",
    password: "stylist123",
    role: "stylist",
    name: "Raj Kapoor",
    whatsapp: "+919876543211",
  },
]

export async function login(username: string, password: string): Promise<boolean> {
  // Check main admin credentials
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    // Set a cookie to indicate authentication
    cookies().set("admin_authenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    cookies().set("admin_role", "admin", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    return true
  }

  // Check staff credentials
  const staffMember = STAFF_CREDENTIALS.find((staff) => staff.username === username && staff.password === password)

  if (staffMember) {
    cookies().set("admin_authenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    cookies().set("admin_role", staffMember.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    cookies().set("admin_name", staffMember.name, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    return true
  }

  return false
}

export async function logout(): Promise<void> {
  cookies().delete("admin_authenticated")
  cookies().delete("admin_role")
  cookies().delete("admin_name")
}

export async function getSession() {
  const isAuthenticated = cookies().has("admin_authenticated")
  const role = cookies().get("admin_role")?.value || null
  const name = cookies().get("admin_name")?.value || null

  return {
    isAuthenticated,
    role,
    name,
  }
}

