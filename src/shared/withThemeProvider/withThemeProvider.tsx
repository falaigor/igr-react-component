import React, { ReactNode } from "react";
import { UiComponentsThemeProvider } from "../uiComponentsThemeProvider/UiComponentsThemeProvider";

export const withThemeProvider = (node: ReactNode, theme = 'light') => (
  <UiComponentsThemeProvider theme={{ key: theme }}>{node}</UiComponentsThemeProvider>
);
