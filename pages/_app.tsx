import Head from "next/head";
import type {AppProps} from 'next/app'
import GlobalStyle from "../styles/GlobalStyle";
import ThemeProvider from "../utils/context/ThemeProvider";
import Header from "../components/Header";
import DarkModeProvider from "../utils/context/DarkModeContext";

function MyApp({Component, pageProps}: AppProps) {
    return <>
            <Head>
                <title>oooooroblog</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
        <DarkModeProvider>
            <ThemeProvider>
                <>
                    <GlobalStyle />
                    <Header/>
                    <Component {...pageProps} />

                </>
            </ThemeProvider>
        </DarkModeProvider>
    </>
}

export default MyApp
