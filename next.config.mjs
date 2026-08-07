/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Blog posts are markdown read from disk at build time — make sure the
     content directory ships with the serverless output. */
  experimental: {
    outputFileTracingIncludes: {
      "/blog/**": ["./src/content/blog/**/*"],
    },
  },
};

export default nextConfig;
