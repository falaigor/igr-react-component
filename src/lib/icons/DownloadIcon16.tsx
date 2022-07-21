import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const DownloadIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="download-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="2p7go62w8a"
            d="M9.707 1.293l3 3c.192.192.284.425.294.656L13 5v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h4.942c.266-.017.543.071.765.293zM8 2H4v12h8V6H9c-.552 0-1-.448-1-1V2zm0 4.972c.276 0 .5.224.5.5v3.554l1.214-1.212c.195-.196.512-.196.707 0 .195.195.195.512 0 .707l-2.073 2.072c-.195.196-.511.196-.707 0L5.57 10.521c-.195-.195-.195-.512 0-.707.195-.196.512-.196.707 0L7.5 11.038V7.472c0-.276.224-.5.5-.5zM9 2v3h3L9 2z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <use xlinkHref="#2p7go62w8a" />
          </g>
        </g>
      </svg>
    </span>
  );
};
