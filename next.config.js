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
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
