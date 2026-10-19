import type { MetadataRoute } from "next";

const BASE_URL = (process.env.CONTACT_SITE_URL || "https://example.com").replace(
  /\/$/,
  "",
);
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
  "/work",
  "/testimonials",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${BASE_PATH}${route}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
