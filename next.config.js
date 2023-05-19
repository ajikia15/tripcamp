/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],

  },
}

module.exports = nextConfig
