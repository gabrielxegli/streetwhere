import { db } from "@/db/db";
import { mails } from "@/db/schema";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Trash } from "lucide-react";

dayjs.extend(relativeTime);

export default async function Home() {
  const result = await db.select().from(mails);

  return (
    <main className="divide-y divide-neutral-700">
      {result.map(({ subject, to, timestamp, plain }) => (
        <div key={to} className="flex flex-col gap-2 py-4">
          <div className="flex justify-between">
            <h1 className="text-xl">
              {subject} <span className="text-sm">[{to}]</span>
            </h1>

            <div className="flex items-end gap-3">
              <span className="text-sm">{dayjs(timestamp).fromNow()}</span>

              <button className="group">
                <Trash className="group-hover:stroke-red-700" />
              </button>
            </div>
          </div>

          <p className="text-sm">{plain}</p>
        </div>
      ))}
    </main>
  );
}
