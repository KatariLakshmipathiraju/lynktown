/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack(config) {
  //   config.infrastructureLogging = {
  //     level: "error",
  //   };
  //   return config;
  // },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
