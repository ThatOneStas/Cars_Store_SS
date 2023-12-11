/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.riastatic.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
