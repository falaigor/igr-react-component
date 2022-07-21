import { Theme } from '../uiComponentsThemeProvider/UiComponentsThemeProvider';

interface ConditionalStyle {
  light: string;
  dark: string;
}

interface Props {
  theme: Theme;
}

export const styleByTheme = ({ light, dark }: ConditionalStyle) => (
  props: Props
) => {
  return props.theme.key === 'dark' ? dark : light;
};
