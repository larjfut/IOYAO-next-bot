import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
console.log("🔐 OPENAI_API_KEY loaded:", !!process.env.OPENAI_API_KEY);

module.exports = {
  // …your existing Next.js config
}
