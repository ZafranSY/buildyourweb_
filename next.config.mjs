const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app", // Allow images from v0.dev blob URLs
      },
      {
        protocol: "https",
        hostname: "**.v0.dev", // Allow images from v0.dev blob URLs
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com", // Example for Unsplash if you use remote images
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com", // Example for S3 if you use remote images
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
