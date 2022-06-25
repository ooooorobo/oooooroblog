import {createRef, useEffect} from "react";

export default function Comment() {
    const commentRef = createRef<HTMLDivElement>();

    useEffect(() => {
        if (!commentRef.current?.firstChild) {
            const ut = document.createElement('script');
            const config = {
                src: "https://utteranc.es/client.js",
                id: "utterance",
                repo: "ooooorobo/ooooorobo.github.io",
                'issue-term': "pathname",
                label: "utterances",
                theme: "preferred-color-scheme",
                crossOrigin: "anonymous",
                async: "true"
            }
            Object.entries(config).forEach(([key, value]) => ut.setAttribute(key, value));
            commentRef.current?.appendChild(ut);
        }
    }, [])

    return <div ref={commentRef}/>
}
