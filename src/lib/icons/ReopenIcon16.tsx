import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const ReopenIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="reopen-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
          <g fill="#666">
            <path
              d="M5.5 3c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L5.5 4h-4c-.245 0-.45.177-.492.41L1 4.5v4.792l2.854-2.853c.246-.246.569-.398.912-.432L4.914 6h5.172c.828 0 1.5.672 1.5 1.5 0 .348-.121.684-.34.95l-.1.11-3 3c-.246.247-.569.399-.912.433L7.086 12H1.5c-.78 0-1.42-.595-1.493-1.356L0 10.5v-6c0-.78.595-1.42 1.356-1.493L1.5 3h4zm4.586 4H4.914c-.106 0-.208.034-.293.095l-.06.051-3 3c-.094.094-.147.221-.147.354 0 .245.177.45.41.492l.09.008h5.172c.106 0 .208-.034.293-.095l.06-.051 3-3c.094-.094.147-.221.147-.354 0-.276-.224-.5-.5-.5zm.414-7c.78 0 1.42.595 1.493 1.356L12 1.5v3c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41L11 4.5V1.706L7.854 4.854c-.196.195-.512.195-.708 0-.195-.196-.195-.512 0-.708L10.292 1H7.5C7.224 1 7 .776 7 .5c0-.245.177-.45.41-.492L7.5 0h3z"
              transform="translate(2 2)"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
