import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const TrashIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="trash-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="5npdcb39fa"
            d="M10.143 1c.452 0 .857.324.857.786V3h2.5c.276 0 .5.224.5.5s-.224.5-.5.5H13v8.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5V4h-.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H5V1.786C5 1.324 5.405 1 5.857 1h4.286zM12 4H4v8.5c0 .276.224.5.5.5h7c.276 0 .5-.224.5-.5V4zM6.5 6c.276 0 .5.224.5.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5zm3 0c.276 0 .5.224.5.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5zm.5-4H6v1h4V2z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <use xlinkHref="#5npdcb39fa" />
          </g>
        </g>
      </svg>
    </span>
  );
};
