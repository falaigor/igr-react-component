import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { Button } from "./Button";

export interface SecondaryButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  loading,
  size = "large",
  ...otherProps
}) => {
  const mergedClassNames = useMergedClassNames(["secondary-button"], className);
  return (
    <Button
      className={mergedClassNames}
      disabled={disabled}
      icon={icon}
      loading={loading}
      size={size}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
