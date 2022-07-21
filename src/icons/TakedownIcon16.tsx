import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const TakedownIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="takedown-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="clyip1x68a"
            d="M5.935 9.002H.5c-.424 0-.656-.495-.384-.82l6.667-8c.32-.384.942-.114.88.382L7.067 5h5.434c.424 0 .655.494.384.82l-6.667 8.335c-.32.384-.942.113-.88-.382l.597-4.771zm.525-6.87l-4.892 5.87h4.933c.3 0 .533.263.496.562l-.455 3.64L11.5 6H6.568c-.301 0-.534-.264-.497-.562l.389-3.306z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1.5 1)">
            <use fill="#666" xlinkHref="#clyip1x68a" />
          </g>
        </g>
      </svg>
    </span>
  );
};
