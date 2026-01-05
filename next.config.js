/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.2.14', '192.168.*.*', 'localhost'],
}

module.exports = nextConfig
