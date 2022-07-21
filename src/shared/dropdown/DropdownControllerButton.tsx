import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Color } from '../../constants/colors';
import { useMergedClassNames } from '../../hooks/useMergedClassNames';
import { styleByTheme } from '../styleByTheme/styleByTheme';

interface DropdownControllerButtonProps {
  className?: string;
  isDropdownOpen: boolean;
  width: string;
  disabled?: boolean;
  children?: ReactNode;
  [otherProps: string]: unknown;
}

export const DropdownControllerButton: React.FC<DropdownControllerButtonProps> = ({
  className,
  isDropdownOpen,
  width,
  disabled = false,
  children,
  ...otherProps
}) => {
  const classNames = useMergedClassNames(
    [
      'axr-dropdown-controller-button',
      ...(isDropdownOpen ? ['axr-open'] : []),
      ...(disabled ? ['axr-disabled'] : [])
    ],
    className
  );
  return (
    <DropButton
      data-testid="DropdownControllerButton"
      className={classNames}
      disabled={disabled}
      style={{ width: width }}
      {...otherProps}
    >
      {children}
    </DropButton>
  );
};

const DropButton = styled.button`
  background-color: rgb(${styleByTheme({ light: Color.L100, dark: Color.D100 })});
  border: 1px solid rgb(${styleByTheme({ light: Color.L400, dark: Color.D400 })});
  border-radius: 4px;
  color: rgb(${styleByTheme({ light: Color.L700, dark: Color.D700 })});
  font-size: 13px;
  line-height: 1.42857;
  outline: none;
  padding: 0.6rem 0.8rem 0.6rem 1.6rem;
  display: flex;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;

  &.axr-open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid transparent;
    position: relative;
    z-index: 6;
  }

  &.axr-disabled {
    background-color: rgb(${styleByTheme({ light: Color.L300, dark: Color.D200 })});
  }
`;
