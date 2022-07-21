import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const CheckIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.AlertOne})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="check-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="rbakkreyea"
            d="M3.984 5.67L9.209.23c.287-.298.762-.308 1.06-.02.3.286.309.76.022 1.06l-5.763 6c-.294.306-.783.307-1.078.003L.212 3.943c-.288-.297-.282-.771.015-1.06.297-.289.772-.282 1.06.015L3.985 5.67z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(3.25 4.25)">
            <use xlinkHref="#rbakkreyea" />
          </g>
        </g>
      </svg>
    </span>
  );
};
