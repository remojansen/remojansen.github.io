/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['react-bootstrap']);

module.exports = withTM({
  reactStrictMode: true,
});
