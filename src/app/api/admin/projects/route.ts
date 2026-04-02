import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";

const SESSION_SECRET = process.env.SESSION_SECRET || "crux-session-secret-change-me";
const SETTINGS_PATH = path.join(process.cwd(), "src/data/project-settings.json");

function verifyToken(token: string): boolean {
  const [payload, hmac] = token.split(".");
  if (!payload || !hmac) return false;
  const expected = crypto.createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
  if (hmac !== expected) return false;
  const age = Date.now() - parseInt(payload, 10);
  return age < 24 * 60 * 60 * 1000;
}

async function requireAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;
  if (!token || !verifyToken(token)) {
    return false;
  }
  return true;
}

export async function GET() {
  const authed = await requireAuth();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = await fs.readFile(SETTINGS_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({});
  }
}

export async function POST(req: NextRequest) {
  const authed = await requireAuth();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const settings = await req.json();
  await fs.writeFile(SETTINGS_PATH, JSON.stringify(settings, null, 2));
  return NextResponse.json({ ok: true });
}
