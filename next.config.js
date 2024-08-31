import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
<<<<<<< HEAD
  //basePath: "/yashjain128.github.io",
=======
  basePath: "/yashjain128.github.io",
>>>>>>> 322c645223e14023629f6b6b33b744289a66d339
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
