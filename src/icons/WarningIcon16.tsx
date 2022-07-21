import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const WarningIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.PrimaryOne})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="warning-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="f5gjyjmlua"
            d="M1.6 10.1c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9zM1.6 0c.387 0 .7.313.7.7v7.6c0 .387-.313.7-.7.7-.387 0-.7-.313-.7-.7V.7c0-.387.313-.7.7-.7z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g>
                <g>
                  <g transform="translate(-562 -397) translate(261 334) translate(39 60) translate(262.5 3.5) translate(6.4 2)">
                    <use fill="#666" xlinkHref="#f5gjyjmlua" />
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
