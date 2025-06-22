"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemeProvider>;

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children, ...props }: CustomThemeProviderProps) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;