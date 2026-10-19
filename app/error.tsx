"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full bg-primary/30 flex items-center">
      <div className="container mx-auto pt-40 pb-28 xl:py-36 text-center">
        <h2 className="h2">Something went wrong.</h2>
        <p className="mx-auto mb-10 max-w-100">
          An unexpected error occurred while loading this page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn inline-flex h-13 items-center justify-center rounded-full border border-white/50 px-8 transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
