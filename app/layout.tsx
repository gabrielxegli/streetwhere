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
  applicationName: APP_NAME,

  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },

  description: APP_DESCRIPTION,

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    startupImage: [
      {
        url: "/splash-screen?w=2048&h=2732",
        media:
          "(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        url: "/splash-screen?w=1668&h=2224",
        media:
          "(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        url: "/splash-screen?w=1536&h=2048",
        media:
          "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        url: "/splash-screen?w=1125&h=2436",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        url: "/splash-screen?w=1242&h=2148",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        url: "/splash-screen?w=750&h=1294",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        url: "/splash-screen?w=640&h=1136",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
      },
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
