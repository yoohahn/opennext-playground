import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const res = NextResponse.next();

  // if (req.headers.get("accept")?.includes("text/html")) {
  //   res.headers.set("Cache-Control", "public, s-maxage=15, must-revalidate");
  // }

  return res;
}
