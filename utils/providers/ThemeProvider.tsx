import {ReactElement, useEffect, useState} from "react";
import {ThemeProvider as _ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../styles/theme";

const ThemeProvider = ({isDarkMode, children}: {isDarkMode: boolean; children: ReactElement}) => {
    const [themePreset, setThemePreset] = useState(isDarkMode ? darkTheme : lightTheme);

    useEffect(() => {
        setThemePreset(isDarkMode ? darkTheme : lightTheme);
    }, [isDarkMode])

    return <_ThemeProvider theme={themePreset}>{children}</_ThemeProvider>
}

export default ThemeProvider
