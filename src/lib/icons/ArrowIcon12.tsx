import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
  classNames?: string;
}

export const ArrowIcon12: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`,
  classNames
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className={`axr-icon axr-icon-12 ${classNames}`}
      data-testid="arrow-icon-12"
    >
      <svg width="12px" height="12px" viewBox="0 0 16 16">
        <defs>
          <path
            id="yybcmmcsza"
            d="M6.966 5.69L12.21.23c.287-.298.762-.308 
            1.06-.02.3.286.309.76.022 1.06l-5.763 
            6c-.287.298-.762.308-1.06.02l-6.238-6C-.068 
            1.004-.078.53.21.23.496-.068.97-.078 
            1.27.21l5.696 5.48z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1.25 4.25)">
            <use xlinkHref="#yybcmmcsza" />
          </g>
        </g>
      </svg>
    </span>
  );
};
