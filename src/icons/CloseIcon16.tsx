import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const CloseIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="close-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="lv03hdh76a"
            d="M9.197.803c.293.293.293.768 0 1.06L6.053 5.008l3.136 3.137c.293.293.293.768 0 1.06-.292.293-.767.293-1.06 0L4.993 6.069 1.856 9.205c-.293.292-.768.292-1.06 0-.293-.293-.293-.768 0-1.061l3.136-3.137L.788 1.864c-.293-.293-.293-.768 0-1.06.293-.294.768-.294 1.06 0l3.144 3.142L8.136.803c.293-.293.768-.293 1.061 0z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(3 3)">
            <use xlinkHref="#lv03hdh76a" />
          </g>
        </g>
      </svg>
    </span>
  );
};
