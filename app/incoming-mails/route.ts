import type { IncomingMail } from "cloudmailin";

export async function POST(req: Request) {
  const mail = (<unknown>req.body) as IncomingMail;

  return "ok";
}
