import { db } from "@/db/db";
import { assets, mails, shops } from "@/db/schema";
import type { IncomingMail } from "cloudmailin";
import { eq } from "drizzle-orm";
import { put } from "@vercel/blob";
import sharp from "sharp";

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

  try {
    const mail: IncomingMail = await req.json();

    const to = mail.envelope.to;
    const subject = mail.headers.subject;
    const html = mail.html;
    const plain = mail.plain;
    const attachments = mail.attachments;

    await db.transaction(async (tx) => {
      const shop = await tx.select().from(shops).where(eq(shops.to, to));

      if (shop.length) throw new Error("Shop not found");

      const [mail] = await tx
        .insert(mails)
        .values({
          to,
          subject: Array.isArray(subject) ? subject[0] : subject,
          html,
          plain,
        })
        .returning({ insertedId: mails.id });

      for (const attachment of attachments) {
        if (!attachment.content) {
          throw new Error("Attachment content not valid");
        }

        const input = Uint8Array.from(atob(attachment.content), (c) =>
          c.charCodeAt(0)
        );

        const data = await sharp(input).avif({ effort: 2 }).toBuffer();
        const file_name =
          attachment.file_name.split(".").slice(0, -1).join(".") + ".avif";

        const path = `streetwhere/attachments/${mail.insertedId}/${file_name}`;

        await put(path, data, { access: "public", contentType: "image/avif" });

        await tx.insert(assets).values({
          mailId: mail.insertedId,
          contentType: "image/avif",
          path,
          size: attachment.size,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }

  return new Response("ok", { status: 200 });
}
