/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "api.lynktown.in"],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
