/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "api.lynktown.in"],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'api.lynktown.in',
      port: '',
      pathname: '/**',
    },
],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
