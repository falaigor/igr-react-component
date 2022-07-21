import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface UiComponentsThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export interface Theme {
  key: string;
}

export const defaultTheme = { key: "light" };

export const UiComponentsThemeProvider = ({
  theme = defaultTheme,
  children
}: UiComponentsThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
