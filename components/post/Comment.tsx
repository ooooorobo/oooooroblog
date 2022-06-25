import Script from "next/script";

export default function Comment() {
    return <Script src="https://utteranc.es/client.js"
                   id="utterance"
        // @ts-ignore
                   repo="ooooorobo/ooooorobo.github.io"
                   issue-term="pathname"
                   label="utterances"
                   theme="preferred-color-scheme"
                   crossOrigin="anonymous"
                   async>
    </Script>
}