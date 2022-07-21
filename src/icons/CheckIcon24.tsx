import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const CheckIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.AlertOne})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="check-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="rbakkreyeb"
            d="M6.851 8.881l7.838-8.16c.43-.448 1.142-.463 1.59-.032.448.43.463 1.142.032 1.59l-8.644 9c-.44.46-1.174.462-1.618.005L1.193 6.29C.76 5.845.77 5.132 1.216 4.7c.445-.434 1.157-.424 1.59.022l4.045 4.16z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(-874 -94) translate(0 58) translate(874 36) translate(4 6)">
            <use xlinkHref="#rbakkreyeb" />
          </g>
        </g>
      </svg>
    </span>
  );
};
