import { NextResponse } from "next/server";

export const middleware = (request) => {
  console.log("request.cookies >>", request.cookies);

  console.log("SESSION_SECRET >>", process.env.SESSION_SECRET);
  console.log("NEXT_PUBLIC_SITE_NAME >>", process.env.NEXT_PUBLIC_SITE_NAME);

  const token = request.cookies.get("session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
