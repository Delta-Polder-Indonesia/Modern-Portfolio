import Link from "next/link";

import { SHOULD_PREFETCH } from "@/lib/assets";

export default function NotFound() {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <div className="container mx-auto pt-40 pb-28 xl:py-36 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h2 className="h2">This page is off the map.</h2>
        <p className="mx-auto mb-10 max-w-100">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          prefetch={SHOULD_PREFETCH}
          className="btn inline-flex h-13 items-center justify-center rounded-full border border-white/50 px-8 transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
