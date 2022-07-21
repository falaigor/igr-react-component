import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const UserIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="user-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
          <g fill="#666">
            <path
              d="M5.3 0c2.21 0 4 1.79 4 4 0 1.355-.674 2.553-1.705 3.277C9.58 7.822 11 9.132 11 10.745v.726c0 .292-.222.529-.495.529-.274 0-.495-.237-.495-.53v-.725c0-1.412-1.984-2.687-4.51-2.687S.99 9.333.99 10.745v.726c0 .292-.221.529-.495.529C.222 12 0 11.763 0 11.47v-.725c0-1.537 1.288-2.798 3.126-3.386C2.027 6.646 1.3 5.408 1.3 4c0-2.21 1.79-4 4-4zm0 1c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
              transform="translate(2.5 2)"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
