import React from 'react';
import { render } from '@testing-library/react';
import { LogoLoading } from '../';

describe('LogoLoading', () => {
  it('renders LogoLoading', () => {
    expect(() => {
      render(<LogoLoading />);
    }).not.toThrow();
  });
});
