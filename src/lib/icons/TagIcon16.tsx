import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const TagIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="tag-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="skv5g41ora"
            d="M11.861 0c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5H3.954c-.136 0-.267-.056-.36-.154L.417 5.54c-.557-.58-.557-1.497 0-2.078L3.593.154C3.687.056 3.818 0 3.953 0h7.908zm0 1H4.167L1.139 4.154c-.185.193-.185.499 0 .692L4.167 8h7.694c.276 0 .5-.224.5-.5v-6c0-.276-.224-.5-.5-.5zm-7.75 2.75c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1.2 3.5)">
            <use fill="#666" xlinkHref="#skv5g41ora" />
          </g>
        </g>
      </svg>
    </span>
  );
};
