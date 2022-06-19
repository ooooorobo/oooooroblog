import {DefaultTheme} from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSizes: string[];
        fontWeights: {
            body: number;
            subtitle: number;
            link: number;
            bold: number;
            title: number;
        },
        lineHeights: {
            body: number;
            title: number;
            code: number;
        }
        colors: ColorPreset;
    }
}

const light: ColorPreset = {
    bg: {
        primary: '#ffffff',
        secondary: '#f3f3f3',
    },
    text: {
        primary: '#050505',
        secondary: '#353b35',
        tertiary: '#4b5656',
        placeholder: '#a29c9c',
    }
}

const dark: ColorPreset = {
    bg: {
        primary: '#2c2929',
        secondary: '#424141',
    },
    text: {
        primary: '#ccc6c6',
        secondary: '#8f948f',
        tertiary: '#484545',
        placeholder: '#a29c9c',
    }
}

const defaultTheme: Omit<DefaultTheme, 'colors'> = {
    fontSizes: [
        '14px',
        '16px',
        '18px',
        '22px',
        '26px',
        '32px',
        '40px'
    ],
    fontWeights: {
        body: 400,
        subtitle: 500,
        link: 600,
        bold: 700,
        title: 800,
    },
    lineHeights: {
        body: 1.5,
        title: 1.3,
        code: 1.6
    }
}

export const lightTheme: DefaultTheme = {...defaultTheme, colors: light};
export const darkTheme: DefaultTheme = {...defaultTheme, colors: dark};

interface ColorPreset {
    bg: {
        primary: string;
        secondary: string;
    },
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        placeholder: string;
    }
}