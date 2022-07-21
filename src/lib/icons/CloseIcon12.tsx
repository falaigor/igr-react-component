import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const CloseIcon12: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-12"
      data-testid="close-icon-12"
    >
      <svg width="12" height="12" viewBox="0 0 12 12">
        <g fill="none" fillRule="evenodd">
          <g fill={fill}>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M7.764 1.236c.186.186.133.54-.117.79L5.135 4.537l2.438 2.437c.25.25.303.604.117.79-.186.186-.54.133-.79-.117L4.463 5.209 2.1 7.573c-.25.25-.604.303-.79.117-.186-.186-.133-.54.117-.79l2.364-2.363L1.353 2.1c-.25-.25-.303-.604-.117-.79.186-.186.54-.133.79.117l2.437 2.438 2.511-2.512c.25-.25.604-.303.79-.117z"
                      transform="translate(-479 -439) translate(431 429) translate(46 8) translate(2 2) translate(1.5 1.5)"
                    />
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
