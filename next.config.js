/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  compiler: {
    styledComponents: {
      ssr: true
    }
  }
}

const remarkFrontmatter = import('remark-frontmatter');
const rehypeHighlight = import('rehype-highlight');

const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
    providerImportSource: '@mdx-js/react'
  }
})

module.exports = withMdx(nextConfig);
