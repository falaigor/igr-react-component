import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const MailIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="mail-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="fpwmzqv6ua"
            d="M1 9V1.59l5.002 4.106 4.997-4.156L11 9H1zm9.073-8L6.001 4.3 1.873 1h8.2zM1.091 0C.489 0 0 .498 0 1.111V8.89C0 9.502.49 10 1.09 10h9.82c.6 0 1.09-.498 1.09-1.111V1.11C12 .498 11.51 0 10.91 0H1.09z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 3)">
            <use xlinkHref="#fpwmzqv6ua" />
          </g>
        </g>
      </svg>
    </span>
  );
};
