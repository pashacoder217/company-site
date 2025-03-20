// Create a new middleware file to capture the current path
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Store the current path in a cookie for the admin layout to use
  response.cookies.set("next-url", request.nextUrl.pathname)

  return response
}

export const config = {
  matcher: ["/admin/:path*"],
}

