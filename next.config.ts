import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // expireTime: 200,
  // headers: async () => {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "private, no-store, must-revalidate, max-age=0",
  //         },
  //       ],
  //     },
  //   ];
  // }
};

export default nextConfig;
