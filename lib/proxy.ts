import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const { pathname } = request.nextUrl;

  if (!session) {
    return NextResponse.redirect(new URL("/Account/Login", request.url));
  }

  if (
    session &&
    (pathname.startsWith("/Account") || pathname.startsWith("/"))
  ) {
    return NextResponse.redirect(new URL("/Home", request.url));
  }

  //If the cookie exists, let them pass through
  return NextResponse.next();
}

//Tell Next.js to ONLY run this middleware on the /Home route
export const config = {
  matcher: [
    "/Home/:path*",
    "/AddCourse/:path*",
    "/Assignments/:path*",
    "/Courses/:path*",
    "/Quizzes/:path*",
  ],
};
