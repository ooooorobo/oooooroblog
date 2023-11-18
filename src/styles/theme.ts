import { css, CSSProp, DefaultTheme, RuleSet } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: {
      tiny: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      big: string;
      huge: string;
    };
    fontWeights: {
      body: number;
      subtitle: number;
      link: number;
      bold: number;
      title: number;
    };
    lineHeights: {
      body: number;
      title: number;
      code: number;
    };
    colors: ColorPreset;
    media: {
      mobile: (...args: string[]) => CSSProp;
      desktop: (...args: string[]) => CSSProp;
    };
  }
}

const primary = {
  primary: "#5f71d6",
  primaryLight: "#798ce8",
  secondary: "#add65f",
};

const light: ColorPreset = {
  bg: {
    primary: "#ffffff",
    secondary: "#eeeeee",
  },
  text: {
    primary: "#050505",
    secondary: "#4b5656",
    tertiary: "#8f948f",
    placeholder: "#a29c9c",
  },
  ...primary,
};

const dark: ColorPreset = {
  bg: {
    primary: "#2c2929",
    secondary: "#424141",
  },
  text: {
    primary: "#ccc6c6",
    secondary: "#8f948f",
    tertiary: "#484545",
    placeholder: "#a29c9c",
  },
  ...primary,
};

const defaultTheme = {
  fontSizes: {
    tiny: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "22px",
    xxl: "26px",
    big: "32px",
    huge: "40px",
  },
  fontWeights: {
    body: 400,
    subtitle: 500,
    link: 600,
    bold: 700,
    title: 800,
  },
  lineHeights: {
    body: 1.7,
    title: 2,
    code: 1.6,
  },
  media: {
    mobile: (...args: RuleSet<object>) => css`
      @media only screen and (max-width: 800px) {
        ${args}
      }
    `,
    desktop: (...args: RuleSet<object>) => css`
      @media only screen and (min-width: 800px) {
        ${args}
      }
    `,
  },
};

export const lightTheme: DefaultTheme = { ...defaultTheme, colors: light };
export const darkTheme: DefaultTheme = { ...defaultTheme, colors: dark };

interface ColorPreset {
  bg: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    placeholder: string;
  };
  primary: string;
  primaryLight: string;
  secondary: string;
}
