import Head from "next/head";
import type {AppProps} from 'next/app'
import GlobalStyle from "../styles/GlobalStyle";
import ThemeProvider from "../utils/providers/ThemeProvider";
import Header from "../components/Header";
import {useDarkMode} from "../utils/hooks/useDarkMode";

function MyApp({Component, pageProps}: AppProps) {
    const {isDarkMode, toggleDarkMode} = useDarkMode();
    return <>
            <Head>
                <title>oooooroblog</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>
            </Head>
            <ThemeProvider isDarkMode={isDarkMode}>
                <>
                    <GlobalStyle />
                    <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <Component {...pageProps} />

                </>
            </ThemeProvider>
    </>
}

export default MyApp
