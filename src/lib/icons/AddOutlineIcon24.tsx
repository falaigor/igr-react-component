import React from 'react';
import { Color } from '../constants/colors';

interface Props {
  fill?: string;
}

export const AddOutlineIcon24: React.FC<Props> = ({
  fill = `rgb(${Color.PrimaryOne})`
}) => {
  const style = { '--svg-fill-color': fill } as React.CSSProperties;
  return (
    <span
      style={style}
      className="axr-icon axr-icon-24"
      data-testid="add-outline-icon-24"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="lgj1z17cza"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 1.5c-5.246 0-9.5 4.254-9.5 9.5s4.254 9.5 9.5 9.5 9.5-4.254 9.5-9.5-4.254-9.5-9.5-9.5zm.75 5.59v3.16h3.158c1 0 1 1.5 0 1.5H12.75v3.158c0 .414-.336.75-.75.75s-.75-.336-.75-.75V12.75H8.09c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.16V8.09c0-1 1.5-1 1.5 0z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <use xlinkHref="#lgj1z17cza" />
        </g>
      </svg>
    </span>
  );
};
