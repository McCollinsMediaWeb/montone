import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

function safeEqual(a: string, b: string) { const x=Buffer.from(a), y=Buffer.from(b); return x.length === y.length && timingSafeEqual(x,y); }
export async function POST(request: Request) {
  const { email, password } = await request.json();
  const valid = safeEqual(String(email).toLowerCase(), (process.env.ADMIN_EMAIL || "").toLowerCase()) && safeEqual(String(password), process.env.ADMIN_PASSWORD || "");
  if (!valid) return NextResponse.json({ error: "Email or password is incorrect" }, { status: 401 });
  const token = createHmac("sha256", process.env.SESSION_SECRET || "dev").update(`montone-admin:${email.toLowerCase()}`).digest("hex");
  const response = NextResponse.json({ ok: true });
  response.cookies.set("montone_admin", token, { httpOnly:true, sameSite:"lax", secure:process.env.NODE_ENV === "production", path:"/", maxAge:60*60*12 });
  return response;
}
