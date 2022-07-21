import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { Button } from "./Button";

export interface NeutralButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const NeutralButton: React.FC<NeutralButtonProps> = ({
  children,
  className,
  disabled,
  size = "large",
  ...otherProps
}) => {
  const mergedClassNames = useMergedClassNames(["neutral-button"], className);
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
