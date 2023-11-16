import Script from "next/script";

/**
 * Giscus comment
 */
export default function Comment() {
  return (
    <Script
      src="https://giscus.app/client.js"
      data-repo="ooooorobo/ooooorobo.github.io"
      data-repo-id="R_kgDOHhuadg"
      data-category="Comments"
      data-category-id="DIC_kwDOHhuads4CVJrG"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="dark_dimmed"
      data-lang="ko"
      data-loading="lazy"
      crossOrigin="anonymous"
      async
    ></Script>
  );
}
