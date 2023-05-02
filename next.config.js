/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["www.flagcdn.com"],
    remotePatterns:[
      {
        protocol: "https",
        hostname:"**",
      },
      {
        protocol: "http",
        hostname:"**",

      }
    ]
  }
}

module.exports = nextConfig
