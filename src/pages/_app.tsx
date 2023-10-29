import {useEffect, useState} from "react";
import Head from "next/head";
import type {AppProps} from "next/app";
import {MDXProvider} from "@mdx-js/react";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";

// context
import ThemeProvider from "@src/utils/context/ThemeProvider";
import DarkModeProvider from "@src/utils/context/DarkModeContext";
// components
import Header from "@src/components/Header";
import components from "@src/components/mdx/MDXComponents";
// styles
import GlobalStyle from "@src/styles/GlobalStyle";

function MyApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: false,
                refetchInterval: false,
                keepPreviousData: true
            }
        }

    }));
    useEffect(() => {
        console.log(
            `
%c
                                         _     _             
                                        | |   | |            
  ___   ___   ___   ___   ___  _ __ ___ | |__ | | ___   __ _ 
 / _ \\ / _ \\ / _ \\ / _ \\ / _ \\| '__/ _ \\| '_ \\| |/ _ \\ / _\` |
| (_) | (_) | (_) | (_) | (_) | | | (_) | |_) | | (_) | (_| |
 \\___/ \\___/ \\___/ \\___/ \\___/|_|  \\___/|_.__/|_|\\___/ \\__, |
                                                        __/ |
                                                       |___/ 
` +
            `
 _                                                     _           
| |                                                   | |          
| |__  _   _    ___   ___   ___   ___   ___  _ __ ___ | |__   ___  
| '_ \\| | | |  / _ \\ / _ \\ / _ \\ / _ \\ / _ \\| '__/ _ \\| '_ \\ / _ \\ 
| |_) | |_| | | (_) | (_) | (_) | (_) | (_) | | | (_) | |_) | (_) |
|_.__/ \\__, |  \\___/ \\___/ \\___/ \\___/ \\___/|_|  \\___/|_.__/ \\___/ 
        __/ |                                                      
       |___/                                                       
  
방문해 주셔서 감사합니다 :>`,
            "color: #fe5000"
        );
    }, []);
    return (
        <>
            <Head>
                <title>oooooroblog</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <DarkModeProvider>
                        <ThemeProvider>
                            <>
                                <GlobalStyle/>
                                <Header/>
                                <MDXProvider components={components}>
                                    <Component {...pageProps} />
                                </MDXProvider>
                            </>
                        </ThemeProvider>
                    </DarkModeProvider>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
