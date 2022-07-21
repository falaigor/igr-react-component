import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const OneshotIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="oneshot-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="cwdj5msjia"
            d="M3.94 3.402c-.123 0-.484.008-1.071.025C1.828 3.457 1 4.309 1 5.35c0 1.06.827 1.935 1.885 1.995.581.033.94.05 1.057.05 3.008 0 5.461.654 7.058 1.716V1.655C9.447 2.76 7.011 3.402 3.94 3.402zM12 .55V5h.5c.276 0 .5.224.5.5s-.224.5-.5.5H12v4.15c0 .443-.533.667-.85.358-.983-.96-2.71-1.688-4.97-1.977l.837 1.976c.323.762-.033 1.643-.795 1.966-.763.324-1.643-.032-1.967-.794L3.083 8.917l-.243-.573h-.012C1.241 8.253 0 6.94 0 5.35c0-1.582 1.258-2.877 2.84-2.923.6-.017.963-.025 1.1-.025 3.468 0 5.99-.853 7.188-2.186.307-.341.872-.124.872.334zM3.948 8.395l1.227 2.893c.108.254.402.373.656.265.254-.108.373-.402.265-.656l-1.05-2.47c-.355-.021-.722-.032-1.098-.032z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 2)">
            <use fill="#666" xlinkHref="#cwdj5msjia" />
          </g>
        </g>
      </svg>
    </span>
  );
};
