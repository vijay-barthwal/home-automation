import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#060810",
    theme_color: "#060810",
    icons: [
      {
        src: "/icon.png",
        sizes: "324x324",
        type: "image/png",
      },
    ],
  };
}
