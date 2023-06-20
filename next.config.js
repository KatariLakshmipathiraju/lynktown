/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.lynktown.in", 'api.lynktown.in'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
