"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "@src/shared/utils/context/ThemeProvider";
import DarkModeProvider from "@src/shared/utils/context/DarkModeContext";
import components from "@src/widgets/mdx/MDXComponents";
import StyledComponentsRegistry from "@src/shared/registry/StyledComponentsRegistry";
import GlobalStyle from "@src/shared/styles/GlobalStyle";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchInterval: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            <MDXProvider components={components}>{children}</MDXProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </DarkModeProvider>
    </QueryClientProvider>
  );
};
