import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const DownloadIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="download-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="lxgalaqzua"
            d="M12.56.442l4 4c.33.33.463.74.44 1.134V19.5c0 .828-.672 1.5-1.5 1.5h-14C.672 21 0 20.328 0 19.5v-18C0 .672.672 0 1.5 0h10.055c.355.011.712.15 1.006.442zM10 1.5H1.5v18h14V7.003h-4c-.828 0-1.5-.672-1.5-1.5V1.5zM8.5 8.539c.414 0 .75.336.75.75v5.88l1.955-1.954c.293-.293.768-.293 1.06 0 .294.293.294.768 0 1.061l-3.242 3.243c-.293.293-.768.293-1.06 0L4.72 14.276c-.293-.293-.293-.768 0-1.06.293-.294.767-.294 1.06 0l1.97 1.969V9.289c0-.414.336-.75.75-.75zm3-7.036v4h4l-4-4z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(3.5 1.497)">
            <use xlinkHref="#lxgalaqzua" />
          </g>
        </g>
      </svg>
    </span>
  );
};
