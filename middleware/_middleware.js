import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl;

    // Allow the request if the following is true...
    // 1) It's a request for next-auth session & provider fetching
    // 2) The token exists

    if (pathname.includes("pages/api/auth") || token) {
      return NextResponse.next();
    }

    // Redirect them to login if they don't have a token and are requesting a protected route
    if (!token && pathname !== "/login") {
      return NextRequest.redirect("/login");
    }
}
