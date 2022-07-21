import React from 'react';
import { Icon as IconComponent, allIcons } from '.';
import './Icon.stories.scss';

export default {
  title: 'Icon',
  component: IconComponent,
  argTypes: {
    color: { control: 'color', defaultValue: '#666666' },
    size: {
      control: {
        type: 'number'
      }
    },
    name: { control: { disable: true } }
  }
};

export const Icon = ({ color, size }) => {
  return Object.values(allIcons).map(iconName => (
    <div title={iconName} key={iconName} className="icon">
      <IconComponent color={color} name={iconName} size={size} />
    </div>
  ));
};
