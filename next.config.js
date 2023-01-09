/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "api-dev.cura.healthcare",
      },
      {
        hostname: "s3-eu-west-1.amazonaws.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
