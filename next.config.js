const withSerwist = require("@serwist/next").default({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  webpack: (cfg) => {
    cfg.externals.push("sharp");
    return cfg;
  },
};

module.exports = withSerwist(nextConfig);
