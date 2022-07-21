import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const SearchIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="search-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="gnyocmprla"
            d="M7.333 1.5c2.854 0 5.167 2.313 5.167 5.167 0 1.417-.57 2.7-1.494 3.634.005.003.01.007.014.012l3 3c.195.195.195.512 0 .707-.195.195-.512.195-.707 0l-3-3c-.026-.026-.05-.055-.069-.086-.827.568-1.83.9-2.91.9-2.854 0-5.167-2.314-5.167-5.167C2.167 3.813 4.48 1.5 7.333 1.5zm0 1c-2.301 0-4.166 1.865-4.166 4.167 0 2.301 1.865 4.166 4.166 4.166S11.5 8.968 11.5 6.667C11.5 4.365 9.634 2.5 7.333 2.5z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g>
                <g transform="translate(-1133 -263) translate(98 239) translate(863 16) translate(172 8)">
                  <use fill="none" xlinkHref="#gnyocmprla" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
