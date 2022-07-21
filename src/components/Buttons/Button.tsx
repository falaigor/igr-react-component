import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { LoadingIndicator } from "../LoadingIndicator";
import { Color } from "../../constants/colors";
import styled from "styled-components";
import { Btn, IconBtn } from "./styles/ButtonStyles";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  iconPosition = "left",
  loading,
  size = "large",
  ...otherProps
}) => {
  const loadingClass = loading ? "frz-loading" : "";
  const disabledClass = disabled ? "frz-disabled" : "";
  const iconClassLeft =
    !!icon && iconPosition === "left" ? "frz-button--icon" : "";
  const iconClassRight =
    !!icon && iconPosition === "right" ? "frz-button--icon-right" : "";
  const isDisabled = disabled || loading;
  const sizeButton = `frz-button--size-${size}`;

  const mergedClassNames = useMergedClassNames(
    [
      "button",
      loadingClass,
      disabledClass,
      iconClassLeft,
      iconClassRight,
      sizeButton,
    ],
    className
  );

  return (
    <Btn className={mergedClassNames} disabled={isDisabled} {...otherProps}>
      <Content className="frz-content">
        {!!icon && iconPosition === "left" && (
          <IconBtn className="frz-icon" directionMargin="right">
            {icon}
          </IconBtn>
        )}
        <span className="frz-button-text">{children}</span>
        {!!icon && iconPosition === "right" && (
          <IconBtn className="frz-icon" directionMargin="left">
            {icon}
          </IconBtn>
        )}
      </Content>
      {loading && (
        <LoadingIndicator dotSize={6} dotColor={`rgb(${Color.L100})`} />
      )}
    </Btn>
  );
};

const Content = styled.span`
  display: flex;
  align-items: center;
  height: 16px;
  opacity: 1;
  transition: opacity 0.3s;
  line-height: normal;
`;
