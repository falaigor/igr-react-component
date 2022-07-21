import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const ArrowRightIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="arrow-right-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
          <g fill="#666">
            <path
              d="M4.981.576c.206.209.229.532.068.766l-.069.083L2.028 4.4h8.477c.274 0 .495.269.495.6 0 .295-.175.54-.406.59l-.089.01H2.028L4.98 8.575c.207.208.23.531.07.766l-.069.083c-.205.208-.525.232-.757.07l-.082-.07-3.968-4c-.206-.208-.23-.532-.068-.766l.068-.083 3.968-4c.232-.234.608-.233.84.001z"
              transform="translate(2.5 3) matrix(-1 0 0 1 11 0)"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
