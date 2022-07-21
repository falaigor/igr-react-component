import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import { SecondaryButton } from '../';

describe('SecondaryButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders SecondaryButton', () => {
    render(<SecondaryButton>Teste</SecondaryButton>);
    expect(screen.getByText('Teste')).toBeDefined();
  });

  it('renders PrimaryButton with loading option', () => {
    render(
      <SecondaryButton loading={true}>Teste</SecondaryButton>
    );
    expect(screen.getByText('Teste')).toBeDefined();
  });
});
