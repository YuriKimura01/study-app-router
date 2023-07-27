/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // これ書いてないとserverActionsが有効にならない
    serverActions: true,
  },
  images: {
    // imageの外部URLを許容する
    remotePatterns: [
      {
        hostname: "nrs.harvard.edu",
      },
    ],
  },
};

module.exports = nextConfig;
