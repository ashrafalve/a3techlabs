import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, isAuthed } from "@/lib/auth";
import { deleteLead } from "@/lib/leads";

export async function POST(request: Request) {
  const store = await cookies();
  const authed = isAuthed(store.get(ADMIN_COOKIE)?.value);

  if (!authed) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: { id?: string | number } | null = null;
  try {
    body = (await request.json()) as { id?: string | number };
  } catch {
    body = null;
  }

  const id = body?.id;
  if (id === undefined || id === null || id === "") {
    return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
  }

  try {
    await deleteLead(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete lead:", err);
    return NextResponse.json({ ok: false, error: "Failed to delete inquiry" }, { status: 500 });
  }
}
