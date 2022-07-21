import React from "react";
import { PrimaryButton, SecondaryButton, NeutralButton } from ".";
import { NeutralButtonProps } from "./NeutralButton";
import { PrimaryButtonProps } from "./PrimaryButton";
import { SecondaryButtonProps } from "./SecondaryButton";
import styled from "styled-components";
import { CheckIcon16 } from "../../icons";

export default { title: "Buttons" };

const PrimaryTemplate = (args: PrimaryButtonProps) => {
  const { icon, ...props } = args;
  return (
    <ContainerThemes>
      <PrimaryButton icon={icon && <CheckIcon16 fill="#666666" />} {...props} />
    </ContainerThemes>
  );
};
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  children: "Primary Button",
  disabled: false,
  loading: false,
  icon: false,
  size: "large",
  iconPosition: "left",
};

const SecondaryTemplate = (args: SecondaryButtonProps) => {
  const { icon, ...props } = args;
  return (
    <ContainerThemes>
      <SecondaryButton
        icon={icon && <CheckIcon16 fill="#666666" />}
        {...props}
      />
    </ContainerThemes>
  );
};
export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  children: "Secondary Button",
  disabled: false,
  loading: false,
  size: "large",
  icon: false,
};

const NeutralTemplate = (args: NeutralButtonProps) => {
  const { icon, ...props } = args;
  return (
    <ContainerThemes>
      <NeutralButton icon={icon && <CheckIcon16 fill="#666666" />} {...props} />
    </ContainerThemes>
  );
};
export const Neutral = NeutralTemplate.bind({});
Neutral.args = {
  children: "Neutral Button",
  disabled: false,
  loading: false,
  size: "large",
  icon: false,
};

const ContainerThemes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  height: 100px;
`;
