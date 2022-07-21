import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const UserOffIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="user-off-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="gosbntuhua"
            d="M5.3 2.5c2.21 0 4 1.79 4 4 0 1.355-.674 2.553-1.705 3.277C9.58 10.322 11 11.632 11 13.245v.726c0 .292-.222.529-.495.529-.274 0-.495-.237-.495-.53v-.725c0-1.412-1.984-2.687-4.51-2.687S.99 11.833.99 13.245v.726c0 .292-.221.529-.495.529-.273 0-.495-.237-.495-.53v-.725c0-1.537 1.288-2.798 3.126-3.386C2.027 9.146 1.3 7.908 1.3 6.5c0-2.21 1.79-4 4-4zm0 1c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM10.208.045l.076.044.07.057L11.5 1.293 12.646.146c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07L12.206 2l1.148 1.146c.195.196.195.512 0 .708-.174.173-.443.192-.638.057l-.07-.057L11.5 2.707l-1.146 1.147c-.196.195-.512.195-.708 0-.173-.174-.192-.443-.057-.638l.057-.07L10.793 2 9.646.854c-.195-.196-.195-.512 0-.708.152-.151.378-.185.562-.1z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 .5)">
            <use fill="one" xlinkHref="#gosbntuhua" />
          </g>
        </g>
      </svg>
    </span>
  );
};
