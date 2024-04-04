/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "i.scdn.co",
      "image-cdn-ak.spotifycdn.com",
      "wrapped-images.spotifycdn.com"
    ],
    // remotePatterns: [
    //   {
    //     hostname: "image-cdn-ak.spotifycdn.com",
    //   },
    // ],
  },
};

module.exports = nextConfig;
