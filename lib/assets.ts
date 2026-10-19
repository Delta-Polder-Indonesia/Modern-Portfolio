/**
 * Helpers for assets hosted under a configurable base path.
 *
 * The site can be deployed at the domain root (e.g. Netlify/Vercel) or under a
 * sub-path (GitHub Pages: `/Modern-Portfolio`). `NEXT_PUBLIC_BASE_PATH` is
 * inlined at build time, so it is safe to use from both server and client
 * components.
 */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/+$/,
  "",
);

export const assetPath = (path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
};

/**
 * Next.js 16.4 ships a router-cache regression for `output: "export"` builds
 * where prefetched entries make `<Link>` clicks silently no-op (no URL change,
 * no request). Disabling prefetch avoids the poisoned cache entry, so it is
 * turned off for static deployments only.
 *
 * @see https://github.com/vercel/next.js/issues/92187
 */
export const SHOULD_PREFETCH = process.env.NEXT_PUBLIC_STATIC_EXPORT !== "1";
