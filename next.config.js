/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Generate a static site.
   *
   * There aren't any features being used that require a server
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',
};

module.exports = nextConfig;
