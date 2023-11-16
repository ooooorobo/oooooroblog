/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  compiler: {
    styledComponents: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(nextConfig);
