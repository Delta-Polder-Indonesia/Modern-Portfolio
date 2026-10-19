import type { MetadataRoute } from "next";

import { assetPath } from "@/lib/assets";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ethan Smith | Portfolio",
    short_name: "Ethan Smith",
    description:
      "Ethan Smith is a Full-stack web developer with 10+ years of experience.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#131424",
    theme_color: "#131424",
    icons: [
      {
        src: assetPath("/favicon.ico"),
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
