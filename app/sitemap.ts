import type { MetadataRoute } from "next";

const baseUrl = "https://www.huromata.com";

const routes = [
  "",
  "/about",
  "/services",
  "/work",
  "/careers",
  "/iso-certificate",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/careers" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/careers" ? 0.9 : 0.8
  }));
}
