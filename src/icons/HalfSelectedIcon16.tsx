import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const HalfSelectedIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="half-selected-icon-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" fillRule="evenodd">
          <g fill="#FF5824">
            <g>
              <g>
                <g>
                  <g transform="translate(-433 -665) translate(415 439) translate(16 56) translate(0 168) translate(2 2)">
                    <rect width="8" height="2" x="4" y="7" rx="1" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
