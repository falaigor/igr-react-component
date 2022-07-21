import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { Button } from "./Button";

export interface SecondaryButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
  disabled,
  size = "large",
  ...otherProps
}) => {
  const mergedClassNames = useMergedClassNames(["secondary-button"], className);
  return (
    <Button
      className={mergedClassNames}
      disabled={disabled}
      size={size}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
