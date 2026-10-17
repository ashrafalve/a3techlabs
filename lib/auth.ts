import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "a3_admin";

const secret = process.env.ADMIN_SESSION_SECRET || "a3techlabs-dev-secret";

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function sessionToken() {
  return createHmac("sha256", secret).update("admin-session-v1").digest("hex");
}

export function isAuthed(token: string | undefined | null) {
  if (!token) return false;
  return safeEqual(token, sessionToken());
}

export function passwordMatches(password: string) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  return safeEqual(password, expected);
}
