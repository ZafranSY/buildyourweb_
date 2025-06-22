import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://buildyourweb.com", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://buildyourweb.com/services", // Example service page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://buildyourweb.com/portfolio", // Example portfolio page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://buildyourweb.com/pricing", // Example pricing page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://buildyourweb.com/contact", // Example contact page
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // Add more URLs for other pages as needed
  ]
}
