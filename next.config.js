/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com", "i0.wp.com", "simlitbangdiklat.kemenag.go.id"],

  },
}

module.exports = nextConfig
