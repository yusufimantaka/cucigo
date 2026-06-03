import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export type Session = {
  userId: string;
  name: string;
  role: string;
  email?: string | null;
  phone?: string | null;
};

const SESSION_COOKIE = "cucigo_session";

export async function createSession(user: {
  id: string;
  name: string;
  role: string;
  email?: string | null;
  phone?: string | null;
}) {
  const payload = JSON.stringify({
    userId: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
    phone: user.phone,
  });
  const token = Buffer.from(payload).toString("base64");
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const payload = Buffer.from(token, "base64").toString("utf-8");
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export async function destroySession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}