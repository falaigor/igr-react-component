import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const EditIcon16: React.FC<Props> = ({
  fill = `rgb(${Color.L700})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-16"
      data-testid="edit-icon-16"
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <defs>
          <path
            id="1v4pjbnqea"
            d="M12.917 5c.718 0 1.3.582 1.3 1.3v2.9c0 .718-.582 1.3-1.3 1.3H3.654c-.116 0-.229-.04-.318-.114L.604 8.136c-.243-.2-.243-.572 0-.772l2.732-2.25c.09-.074.202-.114.318-.114h9.263zm-2.564.999L3.833 6 1.708 7.75 3.833 9.5h6.52V5.999zM12.917 6l-1.564-.001V9.5h1.564c.166 0 .3-.134.3-.3V6.3c0-.166-.134-.3-.3-.3z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(.146 1.072)">
            <use transform="rotate(-45 7.32 7.75)" xlinkHref="#1v4pjbnqea" />
          </g>
        </g>
      </svg>
    </span>
  );
};
