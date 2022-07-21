import React from 'react';
import { render } from '@testing-library/react';
import styled from 'styled-components';
import { Color } from '../../../constants/colors';
import { styleByTheme } from '../styleByTheme';
import { withThemeProvider } from '../../withThemeProvider/withThemeProvider';

describe('styleByTheme', () => {
  const TextExample = styled.p`
    color: rgb(
      ${styleByTheme({ light: Color.PrimaryOne, dark: Color.L800 })}
    );
  `;

  it('return color based on light theme', () => {
    const { getByTestId } = render(
      withThemeProvider(
        <TextExample data-testid="text">Light</TextExample>,
        'light'
      )
    );
    expect(getByTestId('text')).toHaveStyle(`color: ${Color.PrimaryOne}`);
  });

  it('return color based on dark theme', () => {
    const { getByTestId } = render(
      withThemeProvider(
        <TextExample data-testid="text">Dark</TextExample>,
        'dark'
      )
    );
    expect(getByTestId('text')).toHaveStyle(`color: ${Color.L800}`);
  });
});
