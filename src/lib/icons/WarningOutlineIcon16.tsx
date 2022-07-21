import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const WarningOutlineIcon16: React.FC<Props> = ({
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
        <g fill="none" fillRule="evenodd">
          <g fill={fill}>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 1C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5zm-.041 9.271c.195-.005.37.061.523.199.154.138.234.3.241.486.007.182-.062.347-.207.495-.146.148-.313.225-.504.23-.207.005-.39-.061-.546-.2-.158-.138-.24-.3-.247-.484-.007-.19.062-.356.206-.5.144-.145.322-.22.534-.226zm.02-6.971c.37 0 .671.3.671.67v4.84c0 .37-.3.67-.67.67-.37 0-.67-.3-.67-.67V4.47c0-.37.3-.67.67-.67z"
                      transform="translate(-656 -1118) translate(97 397) translate(1 216) translate(542 489) translate(16 16)"
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
