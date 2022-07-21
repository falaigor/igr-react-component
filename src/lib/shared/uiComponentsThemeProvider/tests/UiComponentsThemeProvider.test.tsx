import React from 'react';
import { render } from '@testing-library/react';
import styled from 'styled-components';
import { Color } from '../../../constants/colors';
import { styleByTheme } from '../../styleByTheme/styleByTheme';
import { withThemeProvider } from '../../withThemeProvider/withThemeProvider';

describe('UiComponentsThemeProvider', () => {
  const TextExample = styled.p`
    color: rgb(
      ${styleByTheme({ light: Color.PrimaryOne, dark: Color.L800 })}
    );
  `;

  it('renders an UiComponentsThemeProvider with default theme', () => {
    expect(() => {
      render(
        withThemeProvider(
          <TextExample>Test of new custom ThemeProvider</TextExample>
        )
      );
    }).not.toThrow();
  });

  it('renders an UiComponentsThemeProvider with default theme', () => {
    const { getByTestId } = render(
      withThemeProvider(<TextExample data-testid="text">Light</TextExample>)
    );

    expect(getByTestId('text')).toHaveStyle(`color: ${Color.L800}`);
  });

  it('renders an UiComponentsThemeProvider with dark theme', () => {
    const { getByTestId } = render(
      withThemeProvider(<TextExample data-testid="text">Dark</TextExample>, 'dark')
    );

    expect(getByTestId('text')).toHaveStyle(`color: ${Color.PrimaryOne}`);
  });
});
