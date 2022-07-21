import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const ThreatIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="threat-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
          <g fill="#666">
            <path
              d="M1 10c.276 0 .5.224.5.5v3h3l.09.008c.233.042.41.247.41.492 0 .276-.224.5-.5.5h-3l-.117-.007C.886 14.436.5 14.013.5 13.5v-3l.008-.09C.55 10.177.755 10 1 10zm13 0c.245 0 .45.177.492.41l.008.09v3c0 .513-.386.936-.883.993l-.117.007h-3c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h3v-3c0-.276.224-.5.5-.5zM4.5.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L4.5 1.5h-3v3c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41L.5 4.5v-3c0-.513.386-.936.883-.993L1.5.5h3zm9 0l.117.007c.497.057.883.48.883.993v3l-.008.09c-.042.233-.247.41-.492.41-.276 0-.5-.224-.5-.5v-3h-3l-.09-.008C10.177 1.45 10 1.245 10 1c0-.276.224-.5.5-.5h3z"
              transform="translate(.5 .5)"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
