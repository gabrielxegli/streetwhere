import { createWriteStream, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { Readable, finished } from "node:stream";

const destination = resolve(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "public",
  "splash"
);

export async function GET() {
  return new Response("test");
  [
    { w: 2048, h: 2732, x: 2 },
    { w: 1668, h: 2388, x: 2 },
    { w: 1668, h: 2388, x: 2 },
    { w: 1536, h: 2048, x: 2 },
    { w: 1488, h: 2266, x: 2 },
    { w: 1536, h: 2048, x: 2 },
    { w: 1640, h: 2360, x: 2 },
    { w: 1668, h: 2224, x: 2 },
    { w: 1536, h: 2048, x: 2 },
    { w: 1620, h: 2160, x: 2 },
    { w: 1536, h: 2048, x: 2 },
    { w: 1290, h: 2796, x: 3 },
    { w: 1179, h: 2556, x: 3 },
    { w: 1290, h: 2796, x: 3 },
    { w: 1179, h: 2556, x: 3 },
    { w: 1290, h: 2796, x: 3 },
    { w: 1179, h: 2556, x: 3 },
    { w: 1284, h: 2778, x: 3 },
    { w: 1170, h: 2532, x: 3 },
    { w: 1284, h: 2778, x: 3 },
    { w: 1170, h: 2532, x: 3 },
    { w: 1125, h: 2436, x: 3 },
    { w: 1284, h: 2778, x: 3 },
    { w: 1170, h: 2532, x: 3 },
    { w: 1170, h: 2532, x: 3 },
    { w: 1125, h: 2436, x: 3 },
    { w: 1242, h: 2688, x: 3 },
    { w: 1125, h: 2436, x: 3 },
    { w: 828, h: 1792, x: 2 },
    { w: 1242, h: 2688, x: 3 },
    { w: 1125, h: 2436, x: 3 },
    { w: 828, h: 1792, x: 2 },
    { w: 1125, h: 2436, x: 3 },
    { w: 1080, h: 1920, x: 3 },
    { w: 750, h: 1334, x: 2 },
    { w: 1080, h: 1920, x: 3 },
    { w: 750, h: 1334, x: 2 },
    { w: 1080, h: 1920, x: 3 },
    { w: 750, h: 1334, x: 2 },
    { w: 1080, h: 1920, x: 3 },
    { w: 750, h: 1334, x: 2 },
    { w: 750, h: 1334, x: 2 },
    { w: 750, h: 1334, x: 2 },
    { w: 640, h: 1136, x: 2 },
    { w: 640, h: 1136, x: 2 },
  ].forEach(async ({ w, h }) => {
    try {
      // Fetch the image using the browser's native Fetch API
      const response = await fetch(
        `http://localhost:3000/splash-screen?w=${w}&h=${h}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch image. Status: ${response.status}`);
      }

      // Convert the response blob to a buffer
      const imageData = await response.arrayBuffer();

      // Create a Uint8Array from the buffer
      const uint8Array = new Uint8Array(imageData);

      // Convert Uint8Array to Buffer (for Node.js compatibility)
      const buffer = Buffer.from(uint8Array);

      // Save the image to the filesystem
      writeFileSync(destination + `/splash-${w}x${h}.png`, buffer, {
        flag: "wx",
      });

      console.log(`Image saved successfully at: ${destination}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });
}
