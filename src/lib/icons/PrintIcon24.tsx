import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const PrintIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="print-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="lyki1u5iea"
            d="M16 3.25c.966 0 1.75.784 1.75 1.75v2.5H21c.828 0 1.5.672 1.5 1.5v8c0 .828-.672 1.5-1.5 1.5h-1.5V20c0 .828-.672 1.5-1.5 1.5H6c-.828 0-1.5-.672-1.5-1.5v-1.5H3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3.25V5c0-.966.784-1.75 1.75-1.75h8zM18 15H6v5h12v-5zm3-6H3v8h1.5v-2c0-.828.672-1.5 1.5-1.5h12c.828 0 1.5.672 1.5 1.5v2H21V9zm-4.25 2c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zM16 4.75H8c-.138 0-.25.112-.25.25v2.5h8.5V5c0-.138-.112-.25-.25-.25z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <use xlinkHref="#lyki1u5iea" />
          </g>
        </g>
      </svg>
    </span>
  );
};
