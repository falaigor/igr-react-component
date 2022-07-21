import { useTheme } from "styled-components";
import { defaultTheme, Theme } from "../shared/uiComponentsThemeProvider/UiComponentsThemeProvider";

export const useUiComponentsThemeProvider = (): Theme => {
  const theme = useTheme() as Theme;
  return theme || defaultTheme;
};
