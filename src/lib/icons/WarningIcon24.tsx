import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const WarningIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.PrimaryOne})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="warning-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
          <g fill={fill}>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M11.25.75c5.799 0 10.5 4.701 10.5 10.5s-4.701 10.5-10.5 10.5S.75 17.049.75 11.25 5.451.75 11.25.75zm0 1.5c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 12.375c.621 0 1.125.504 1.125 1.125s-.504 1.125-1.125 1.125-1.125-.504-1.125-1.125.504-1.125 1.125-1.125zm0-9.375c.414 0 .75.336.75.75v6.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6c0-.414.336-.75.75-.75z"
                      transform="translate(-882 -36) translate(882 36) translate(.75 .75)"
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
