/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = nextConfig
