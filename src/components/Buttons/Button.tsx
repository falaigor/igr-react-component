import React, { ReactNode } from "react";
import { useMergedClassNames } from "../../hooks/useMergedClassNames";
import { Color } from "../../constants/colors";
import styled from "styled-components";
import { Btn, IconBtn } from "./styles/ButtonStyles";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  [otherProps: string]: unknown;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  size = "large",
  ...otherProps
}) => {
  const disabledClass = disabled ? "frz-disabled" : "";
  const isDisabled = disabled;
  const sizeButton = `frz-button--size-${size}`;

  const mergedClassNames = useMergedClassNames(
    ["button", disabledClass, sizeButton],
    className
  );

  return (
    <Btn className={mergedClassNames} disabled={isDisabled} {...otherProps}>
      <Content className="frz-content">
        <span className="frz-button-text">{children}</span>
      </Content>
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
