import { db } from "@/db/db";
import { mails, shops } from "@/db/schema";
import type { IncomingMail } from "cloudmailin";
import { eq } from "drizzle-orm";

const CLOUDMAILIN_USERNAME = process.env.CLOUDMAILIN_USERNAME;
const CLOUDMAILIN_PASSWORD = process.env.CLOUDMAILIN_PASSWORD;

export async function POST(req: Request) {
  const authheader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (!authheader || !authheader.startsWith("Basic ")) {
    return new Response("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }

  const [username, password] = Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");

  if (CLOUDMAILIN_USERNAME !== username || CLOUDMAILIN_PASSWORD !== password) {
    return new Response("Authentication failed", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }

  const mail: IncomingMail = await req.json();

  const to = mail.envelope.to;
  const subject = mail.headers.subject;
  const html = mail.html;
  const plain = mail.plain;

  if (await db.select().from(shops).where(eq(shops.to, to))) {
    const result = await db.insert(mails).values({
      to,
      subject: Array.isArray(subject) ? subject[0] : subject,
      html,
      plain,
    });
  }

  return new Response("ok", { status: 200 });
}
