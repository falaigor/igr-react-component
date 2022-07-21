import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const OptionsIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="options-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="yiy4a69t4a"
            d="M8 12c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g>
                <g transform="translate(-1187 -421) translate(98 370) translate(0 27) translate(1089 24)">
                  <use fill="none" xlinkHref="#yiy4a69t4a" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
