import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Example: Disallow crawling of a private directory
    },
    sitemap: "https://buildyourweb.com/sitemap.xml", // Replace with your actual domain
  }
}
