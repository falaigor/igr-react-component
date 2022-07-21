import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const CloseIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="close-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
          <g>
            <path
              d="M.293.293c.39-.39 1.024-.39 1.414 0L6.69 5.274 11.672.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L8.104 6.69l4.982 4.983c.36.36.388.928.083 1.32l-.083.094c-.39.39-1.023.39-1.414 0L6.689 8.104l-4.982 4.982c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l4.981-4.983L.293 1.707C-.067 1.347-.095.78.21.387z"
              transform="translate(5.487 5.487)"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
