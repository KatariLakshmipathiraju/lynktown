/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lynktown.in", "api.lynktown.in"],
    loader: "akamai",
    path: "",
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
