import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, passwordMatches, sessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  let body: { password?: string } | null = null;
  try {
    body = (await request.json()) as { password?: string };
  } catch {
    body = null;
  }

  const password = body?.password ?? "";

  if (!passwordMatches(password)) {
    return NextResponse.json(
      { ok: false, error: "Incorrect password." },
      { status: 401 },
    );
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({ ok: true });
}
