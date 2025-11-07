import type { MetadataRoute } from "next";
import { SERVICE_PATHS, SITE_URL } from "@/lib/seo";

const baseRoutes = ["", "/info"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    ...baseRoutes,
    ...SERVICE_PATHS.map((service) => `/services/${service}`),
  ];

  return routes.map((route) => {
    const urlPath = route === "" ? "/" : route;

    return {
      url: `${SITE_URL}${urlPath}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/info" ? 0.8 : 0.7,
    } satisfies MetadataRoute.Sitemap[number];
  });
}

