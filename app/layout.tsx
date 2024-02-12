import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], preload: true });

const APP_NAME = "Streetwhere";
const APP_DEFAULT_TITLE =
  "Streetwhere - Find streetbrands all around the world and stay notified when thy drop clothes.";
const APP_TITLE_TEMPLATE = "%s - Streetwhere";
const APP_DESCRIPTION =
  "Streetwhere is a online streetbrand hub that helps you manage different drops and releases from a central place. With the help of notification you will never miss a drop on Streetwhere.";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: APP_NAME,
  keywords: [
    "Streetwear",
    "Fashion",
    "Notification Manager",
    "Notification Hub",
    "Streetbrands",
  ],
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Gabriel Egli" }],
  creator: "Gabriel Egli",
  publisher: "Gabriel Egli",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },

  description: APP_DESCRIPTION,

  manifest: "/manifest.json",

  icons: [
    {
      rel: "icon",
      url: "/icons/64",
      type: "image/png",
      sizes: "64x64",
    },
    {
      rel: "icon",
      url: "/icons/32",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/icons/16",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/180",
      type: "image/png",
      sizes: "180x180",
    },
  ],

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    startupImage: [
      ...[
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
      ].map(({ w, h, x }) => ({
        url: `splash/splash-${w}x${h}.png`,
        media: `(max-device-width: ${w}px) and (max-device-height: ${h}px) and (-webkit-device-pixel-ratio: ${x})`,
      })),
    ],
  },

  formatDetection: {
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },

  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#111111]">
      <body
        className={
          dmSans.className + " min-h-screen flex flex-col justify-between"
        }
      >
        <header>header</header>

        <main className="flex-grow">{children}</main>

        <footer>footer</footer>
      </body>
    </html>
  );
}
