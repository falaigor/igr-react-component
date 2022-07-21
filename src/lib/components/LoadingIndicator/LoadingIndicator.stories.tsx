import React from 'react';
import { LoadingIndicator as LoadingIndicatorComponent } from '.';

export default {
  title: 'LoadingIndicator',
  component: LoadingIndicatorComponent,
  argTypes: {
    dotSize: { control: 'number', defaultValue: 8 },
    dotColor: { control: 'color', defaultValue: 'rgb(255,88,36)' }
  }
};

export const LoadingIndicator = ({ dotSize, dotColor }) => (
  <LoadingIndicatorComponent dotSize={dotSize} dotColor={dotColor} />
);
