import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const UsersIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="users-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="none" fillRule="evenodd">
          <g fill="none">
            <path
              d="M5.333 0c2.223 0 4.025 1.79 4.025 4 0 1.355-.678 2.553-1.715 3.277 1.998.545 3.426 1.855 3.426 3.468v.726c0 .292-.223.529-.498.529s-.498-.237-.498-.53v-.725c0-1.412-1.996-2.687-4.538-2.687-2.542 0-4.538 1.275-4.538 2.687v.726c0 .292-.223.529-.499.529C.223 12 0 11.763 0 11.47v-.725c0-1.537 1.297-2.798 3.146-3.387C2.04 6.646 1.308 5.408 1.308 4c0-2.21 1.802-4 4.025-4zm7.129 3c1.406 0 2.546 1.133 2.546 2.53 0 .72-.303 1.37-.79 1.831.999.394 1.705 1.14 1.776 2.047l.006.151v.321c0 .276-.225.5-.503.5-.247 0-.453-.177-.495-.41l-.008-.09v-.32c0-.78-1.05-1.5-2.415-1.5-.608 0-1.178.145-1.622.399-.24.138-.548.056-.687-.183-.139-.24-.056-.545.184-.683.104-.06.213-.115.325-.165-.529-.462-.863-1.141-.863-1.898 0-1.397 1.14-2.53 2.546-2.53zm0 1c-.85 0-1.54.685-1.54 1.53s.69 1.53 1.54 1.53c.85 0 1.54-.685 1.54-1.53S13.312 4 12.462 4zM5.333 1C3.666 1 2.314 2.343 2.314 4s1.352 3 3.02 3C7 7 8.351 5.657 8.351 4S7.001 1 5.333 1z"
              transform="translate(0 2)"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};