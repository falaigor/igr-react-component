import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { Button } from "./Button";

export interface NeutralButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const NeutralButton: React.FC<NeutralButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  size = "large",
  loading,
  ...otherProps
}) => {
  const mergedClassNames = useMergedClassNames(["neutral-button"], className);
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
