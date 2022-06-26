import Head from "next/head";
import type {AppProps} from 'next/app'
import GlobalStyle from "../styles/GlobalStyle";
import ThemeProvider from "../utils/context/ThemeProvider";
import Header from "../components/Header";
import DarkModeProvider from "../utils/context/DarkModeContext";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        return () => console.log(`
%c
                                         _     _             
                                        | |   | |            
  ___   ___   ___   ___   ___  _ __ ___ | |__ | | ___   __ _ 
 / _ \\ / _ \\ / _ \\ / _ \\ / _ \\| '__/ _ \\| '_ \\| |/ _ \\ / _\` |
| (_) | (_) | (_) | (_) | (_) | | | (_) | |_) | | (_) | (_| |
 \\___/ \\___/ \\___/ \\___/ \\___/|_|  \\___/|_.__/|_|\\___/ \\__, |
                                                        __/ |
                                                       |___/ 
` + `
 _                                                     _           
| |                                                   | |          
| |__  _   _    ___   ___   ___   ___   ___  _ __ ___ | |__   ___  
| '_ \\| | | |  / _ \\ / _ \\ / _ \\ / _ \\ / _ \\| '__/ _ \\| '_ \\ / _ \\ 
| |_) | |_| | | (_) | (_) | (_) | (_) | (_) | | | (_) | |_) | (_) |
|_.__/ \\__, |  \\___/ \\___/ \\___/ \\___/ \\___/|_|  \\___/|_.__/ \\___/ 
        __/ |                                                      
       |___/                                                       

방문해 주셔서 감사합니다 :>`, 'color: #fe5000'
        );
    }, [])
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
                    <GlobalStyle/>
                    <Header/>
                    <Component {...pageProps} />

                </>
            </ThemeProvider>
        </DarkModeProvider>
    </>
}

export default MyApp
