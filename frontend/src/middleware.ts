import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const path = req.nextUrl.pathname
        
        // Protect all routes under /admin except /admin/login
        if (path.startsWith("/admin") && path !== "/admin/login") {
          return token !== null
        }
        
        return true
      }
    },
    pages: {
      signIn: "/admin/login",
    },
    secret: process.env.NEXTAUTH_SECRET || "sak_college_secret_key_1234567890_dev_only",
  }
)

export const config = {
  matcher: ["/admin", "/admin/", "/admin/:path*"]
}
