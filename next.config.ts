import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * GitHub Pages can only serve static files. Everything else (local dev,
 * Netlify, Vercel…) keeps the Next.js server runtime so the contact API works.
 * Set NEXT_STATIC_EXPORT=1 for static hosting deployments.
 */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  devIndicators: false,
  agentRules: false,
  // Allow the dev server to be opened from the sandbox/preview domains.
  // Next.js blocks cross-origin requests to dev-only resources (including
  // HMR) unless the host is listed here.
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.e2b.app",
    "*.arena.ai",
    "*.sandbox.arena.ai",
  ],
};

export default nextConfig;
