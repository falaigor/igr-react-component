import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const CopyIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="copy-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
          <g stroke={fill} transform="translate(2 2)">
            <rect
              style={{ fill: 'transparent' }}
              width={8}
              height={8}
              x={4}
              y={4}
              rx={2}
            />
            <path
              style={{ fill: 'transparent' }}
              strokeLinecap="round"
              d="M2.195 8h-.417A1.778 1.778 0 010 6.222V1.778C0 .796.796 0 1.778 0h4.444C7.204 0 8 .796 8 1.778v.515"
            />
          </g>
          <path
            fill={fill}
            d="M12 5.5A2.5 2.5 0 0114.5 8v4a2.5 2.5 0 01-2.5 2.5H8A2.5 2.5 0 015.5 12V8A2.5 2.5 0 018 5.5zm0 1H8A1.5 1.5 0 006.5 8v4A1.5 1.5 0 008 13.5h4a1.5 1.5 0 001.5-1.5V8A1.5 1.5 0 0012 6.5zm-3.778-5c1.206 0 2.193.937 2.273 2.122l.005.156v.515a.5.5 0 01-.992.09l-.008-.09v-.515c0-.662-.503-1.206-1.147-1.271l-.13-.007H3.777c-.662 0-1.206.503-1.271 1.147l-.007.13v4.445c0 .662.503 1.206 1.147 1.271l.13.007h.418a.5.5 0 01.09.992l-.09.008h-.417a2.278 2.278 0 01-2.272-2.122L1.5 8.222V3.778c0-1.206.937-2.193 2.122-2.273l.156-.005h4.444z"
          />
        </g>
      </svg>
    </span>
  );
};
