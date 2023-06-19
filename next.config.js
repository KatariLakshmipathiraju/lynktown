/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.lynktown.in", 'api.lynktown.in'],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'api.lynktown.in',
      port: '',
      pathname: '/**',
    },
],
};

module.exports = nextConfig;
