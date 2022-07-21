import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const SearchIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="search-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="gbz2zt9sya"
            d="M8 .25c4.28 0 7.75 3.47 7.75 7.75 0 2.126-.856 4.051-2.242 5.452.008.004.015.01.022.018l4.5 4.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-4.5-4.5c-.04-.04-.074-.082-.103-.128-1.242.85-2.746 1.348-4.367 1.348C3.72 15.75.25 12.28.25 8 .25 3.72 3.72.25 8 .25zm0 1.5C4.548 1.75 1.75 4.548 1.75 8S4.548 14.25 8 14.25s6.25-2.798 6.25-6.25S11.452 1.75 8 1.75z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(3 2)">
            <use xlinkHref="#gbz2zt9sya" />
          </g>
        </g>
      </svg>
    </span>
  );
};
