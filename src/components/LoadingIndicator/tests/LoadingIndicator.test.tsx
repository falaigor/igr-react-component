import React from 'react';
import { render } from '@testing-library/react';

import { LoadingIndicator } from '../';

describe('LoadingIndicator', () => {
  it('renders LoadingIndicator', () => {
    expect(() => {
      render(<LoadingIndicator dotSize={8} dotColor="#222222" />);
    }).not.toThrow();
  });
});
