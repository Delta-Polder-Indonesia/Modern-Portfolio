import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "@fontsource-variable/sora";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";
import { assetPath } from "@/lib/assets";

import "./globals.css";

const SITE_URL = (process.env.CONTACT_SITE_URL || "https://example.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH || ""}`),
  title: "Ethan Smith | Portfolio",
  description:
    "Ethan Smith is a Full-stack web developer with 10+ years of experience.",
  keywords: [
    "react",
    "next",
    "nextjs",
    "html",
    "css",
    "javascript",
    "js",
    "modern-ui",
    "modern-ux",
    "portfolio",
    "framer-motion",
    "react-hot-toast",
    "resend",
    "3d-website",
    "particle-effect",
  ],
  authors: [{ name: "Sanidhya Kumar Verma" }],
  openGraph: {
    title: "Ethan Smith | Portfolio",
    description:
      "Ethan Smith is a Full-stack web developer with 10+ years of experience.",
    type: "website",
    images: [assetPath("/avatar.png")],
  },
  icons: {
    icon: assetPath("/favicon.ico"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131424",
};

const backgroundStyles: CSSProperties & Record<`--${string}`, string> = {
  "--background-image-explosion": `url(${assetPath("/bg-explosion.png")})`,
  "--background-image-circles": `url(${assetPath("/circles.png")})`,
  "--background-image-circle-star": `url(${assetPath("/circle-star.svg")})`,
  "--background-image-site": `url(${assetPath("/site-bg.svg")})`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="font-sora page bg-site text-white bg-cover bg-no-repeat relative"
        style={backgroundStyles}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <TopLeftImg />
        <Nav />
        <Header />
        <main id="main-content" className="h-full" tabIndex={-1}>
          {children}
        </main>
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#393a47",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
