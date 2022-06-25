import {createRef, useContext, useEffect} from "react";
import {DarkModeContext} from "../../utils/context/DarkModeContext";
import styled from "styled-components";

const createUtterance = (themeName) => {
    const wrapper = document.createElement('div')
    const comment = document.createElement('script')
    const config = {
        src: "https://utteranc.es/client.js",
        id: "utterance",
        repo: "ooooorobo/ooooorobo.github.io",
        'issue-term': "pathname",
        label: "utterances",
        theme: themeName,
        crossOrigin: "anonymous",
        async: "true"
    }
    Object.entries(config).forEach(([key, value]) => comment.setAttribute(key, value));
    wrapper.appendChild(comment)
    return wrapper;
}

export default function Comment() {
    const {isDarkMode} = useContext(DarkModeContext);
    const lightRef = createRef<HTMLDivElement>();
    const darkRef = createRef<HTMLDivElement>();

    useEffect(() => {
        if (!lightRef.current?.firstChild && !darkRef.current?.firstChild) {
            const light = createUtterance('github-light');
            const dark = createUtterance('github-dark');
            lightRef.current?.appendChild(light)
            darkRef.current?.appendChild(dark)
        }
    }, [])

    return <Wrapper isDarkMode={isDarkMode}>
        <div className={'dark'} ref={darkRef} />
        <div className={'light'} ref={lightRef} />
    </Wrapper>
}

const Wrapper = styled.div<{isDarkMode: boolean}>`
    .light {
      display: ${({isDarkMode}) => isDarkMode ? 'none' : 'block'};
    }
  
  .dark {
    display: ${({isDarkMode}) => isDarkMode ? 'block' : 'none'};
  }
`