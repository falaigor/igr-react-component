import React, { useEffect, useRef } from 'react';
import { SearchIcon16 } from '../../../icons/';

interface DropdownListInputProps {
  placeholder?: string;
  [inputProps: string]: unknown;
}
export const DropdownListInput: React.FC<DropdownListInputProps> = ({
  placeholder,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <li className="axr-dropdown-filter-input-wrapper">
      <input
        placeholder={placeholder}
        data-testid="DropdownListInput"
        ref={inputRef}
        {...inputProps}
      />
      <SearchIcon16 />
    </li>
  );
};
