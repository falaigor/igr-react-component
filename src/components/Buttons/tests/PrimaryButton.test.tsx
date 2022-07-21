import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import { PrimaryButton } from '../';

describe('PrimaryButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders PrimaryButton', () => {
    render(<PrimaryButton>Teste</PrimaryButton>);
    expect(screen.getByText('Teste')).toBeDefined();
  });

  it('renders PrimaryButton with loading option', () => {
    render(
      <PrimaryButton loading={true}>Teste</PrimaryButton>
    );
    expect(screen.getByText('Teste')).toBeDefined();
  });

  it('renders PrimaryButton with disabled option', () => {
    render(
      <PrimaryButton disabled={true}>Teste</PrimaryButton>
    );
    expect(screen.getByText('Teste')).toBeDefined();
  });
});
