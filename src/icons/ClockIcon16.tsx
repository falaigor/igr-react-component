import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const ClockIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L100})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="clock-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="l0bjmub1ea"
            d="M7 0c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm0 1C3.686 1 1 3.686 1 7s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm-.5 2.5c.276 0 .5.224.5.5v3h3c.276 0 .5.224.5.5s-.224.5-.5.5H6.5c-.276 0-.5-.224-.5-.5V4c0-.276.224-.5.5-.5z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g>
                <g>
                  <g transform="translate(-368 -235) translate(364 214) translate(0 17) translate(4 4) translate(1 1)">
                    <use fill={fill} xlinkHref="#l0bjmub1ea" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
