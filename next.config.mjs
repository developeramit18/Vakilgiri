/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn-dnjgn.nitrocdn.com",
          },
        ],
      },
      devIndicators: false
};

export default nextConfig;
