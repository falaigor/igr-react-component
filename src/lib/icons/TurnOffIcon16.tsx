import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const TurnOffIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="turnoff-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="5zq9onj3oa"
            d="M3.445 1.603c.15.232.083.541-.15.69C1.876 3.21 1 4.78 1 6.5c0 2.761 2.239 5 5 5s5-2.239 5-5c0-1.707-.862-3.267-2.264-4.186-.231-.151-.296-.461-.145-.692.152-.231.462-.296.693-.144C10.965 2.578 12 4.452 12 6.5c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-2.064 1.051-3.95 2.754-5.047.232-.15.541-.083.691.15zM6 0c.276 0 .5.224.5.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 2)">
            <use fill="#666" xlinkHref="#5zq9onj3oa" />
          </g>
        </g>
      </svg>
    </span>
  );
};
