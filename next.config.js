/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.lynktown.in", "api.lynktown.in"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|m4v)$/,
      use: {
        loader: "file-loader", // or 'url-loader' if you installed that
        options: {
          publicPath: "/_next/static/videos/", // Adjust this path as needed
          outputPath: "static/videos/", // Adjust this path as needed
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
