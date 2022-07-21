import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const PlayIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="play-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="g2nuocopgla"
            d="M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 1C3.962 1.5 1.5 3.962 1.5 7s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S10.038 1.5 7 1.5zM5.876 4.519C6.377 4.277 9.5 6.428 9.5 6.996c0 .568-3.123 2.775-3.624 2.476-.501-.298-.501-4.71 0-4.953z"
            transform="translate(1 1)"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g>
                <g transform="translate(-1133 -263) translate(98 239) translate(863 16) translate(172 8)">
                  <use fill="none" xlinkHref="#g2nuocopgla" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
