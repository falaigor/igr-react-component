import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const ArrowIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="arrow-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="wqgrxsvaja"
            d="M9.804 7.586l7.38-7.279c.403-.398 1.071-.41 1.492-.028.42.382.434 1.015.03 1.414l-8.11 8c-.405.398-1.073.41-1.494.028l-8.778-8C-.096 1.338-.11.705.294.307.7-.091 1.368-.103 1.788.279l8.017 7.307z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2.6 7)">
            <use fill={fill} xlinkHref="#wqgrxsvaja" />
          </g>
        </g>
      </svg>
    </span>
  );
};
