import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const AddIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="add-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="bryxzd9zna"
            d="M5.338 0c.414 0 .75.336.75.75l-.001 3.837h3.839c.414 0 .75.337.75.75 0 .415-.336.75-.75.75H6.087v3.839c0 .414-.335.75-.75.75-.413 0-.75-.336-.75-.75V6.087H.75c-.414 0-.75-.335-.75-.75 0-.413.336-.75.75-.75h3.837V.75c0-.414.337-.75.75-.75z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2.662 2.749)">
            <use xlinkHref="#bryxzd9zna" />
          </g>
        </g>
      </svg>
    </span>
  );
};
