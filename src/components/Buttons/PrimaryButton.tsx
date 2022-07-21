import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { Button } from "./Button";

export interface PrimaryButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  iconPosition = "left",
  loading,
  size = "large",
  ...otherProps
}) => {
  const mergedClassNames = useMergedClassNames(["primary-button"], className);

  return (
    <Button
      className={mergedClassNames}
      disabled={disabled}
      icon={icon}
      iconPosition={iconPosition}
      loading={loading}
      size={size}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
