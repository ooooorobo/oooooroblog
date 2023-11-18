import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Nanum_Gothic_Coding, Noto_Sans_KR } from "next/font/google";

import ThemeProvider from "@src/utils/context/ThemeProvider";
import DarkModeProvider from "@src/utils/context/DarkModeContext";
import Header from "@src/components/Header";
import components from "@src/components/mdx/MDXComponents";
import GlobalStyle from "@src/styles/GlobalStyle";

const defaultFont = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-default",
});

const codingFont = Nanum_Gothic_Coding({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-coding",
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchInterval: false,
            keepPreviousData: true,
          },
        },
      })
  );
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
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DarkModeProvider>
          <ThemeProvider>
            <>
              <GlobalStyle />
              <Header />
              <MDXProvider components={components}>
                <main
                  className={`${defaultFont.variable} ${codingFont.variable}`}
                >
                  <Component {...pageProps} />
                </main>
              </MDXProvider>
            </>
          </ThemeProvider>
        </DarkModeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
