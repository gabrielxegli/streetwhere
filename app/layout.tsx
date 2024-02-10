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
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
