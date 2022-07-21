import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const AddOutlineIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="add-outline-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="hucj26yd8a"
            d="M8 .7c4.032 0 7.3 3.268 7.3 7.3s-3.268 7.3-7.3 7.3S.7 12.032.7 8 3.968.7 8 .7zm0 .995C4.518 1.695 1.695 4.518 1.695 8c0 3.482 2.823 6.305 6.305 6.305 3.482 0 6.305-2.823 6.305-6.305 0-3.482-2.823-6.305-6.305-6.305zm.498 3.71l-.001 2.097h2.097c.663 0 .663.996 0 .996l-2.097-.001v2.097c0 .274-.222.497-.497.497s-.498-.223-.498-.497V8.497H5.405c-.275 0-.498-.222-.498-.497s.223-.498.498-.498h2.097V5.405c0-.663.996-.663.996 0z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <use xlinkHref="#hucj26yd8a" />
          </g>
        </g>
      </svg>
    </span>
  );
};
