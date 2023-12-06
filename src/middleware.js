// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";



export default withAuth(
    function middleware(req) {
        console.log(req.nextUrl.pathname);
        console.log(req.nextauth.token.role);
        if(req.nextauth.token.role != "admin" && req.nextUrl.pathname.startsWith("/create") || req.nextUrl.pathname.startsWith("/api/user") ){
            return NextResponse.rewrite(new URL("/denied", req.url))
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        }
    }
)

export const config = { matcher: ['/blog/:path*','/profile', '/create', '/api/user'] }