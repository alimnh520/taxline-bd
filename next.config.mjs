import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // ❌ WARNING FIXED — "turbo" removed (not allowed in Next.js 16)
  experimental: {
    proxyTimeout: 10000, // এটুকু allowed
  },
};

export default withPWA(nextConfig);
