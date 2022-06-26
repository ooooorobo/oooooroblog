import { ReactElement, useContext, useEffect, useState } from "react";
import { ThemeProvider as _ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@src/styles/theme";
import { DarkModeContext } from "./DarkModeContext";

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [themePreset, setThemePreset] = useState(
    isDarkMode ? darkTheme : lightTheme
  );

  useEffect(() => {
    setThemePreset(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  return <_ThemeProvider theme={themePreset}>{children}</_ThemeProvider>;
};

export default ThemeProvider;
