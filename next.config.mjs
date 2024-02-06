/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**.clerk.com",
      },
    ],
  },
};

export default nextConfig;
