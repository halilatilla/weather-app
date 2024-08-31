/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["openweathermap.org"],
  },
  compiler: {
    styledComponents: true,
  },
};

// Change from CommonJS to ESM export
export default nextConfig;
