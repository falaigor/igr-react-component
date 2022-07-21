import React from 'react';
import { render, screen,cleanup } from '@testing-library/react';

import { NeutralButton } from '../';

describe('NeutralButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders NeutralButton', () => {
    render(
      <NeutralButton>{'Neutral Button Test'}</NeutralButton>
    );
    expect(screen.getByText('Neutral Button Test')).toBeDefined();
  });

  it('renders PrimaryButton with loading option', () => {
    render(
      <NeutralButton loading={true}>Teste</NeutralButton>
    );
    expect(screen.getByText('Teste')).toBeDefined();
  });

  it('renders NeutralButton with disabled option', () => {
    render(
      <NeutralButton disabled={true}>Teste</NeutralButton>
    );
    expect(screen.getByText('Teste')).toBeDefined();
  });
});
