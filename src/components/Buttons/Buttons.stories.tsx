import React from "react";
import { PrimaryButton, SecondaryButton, NeutralButton } from ".";
import { NeutralButtonProps } from "./NeutralButton";
import { PrimaryButtonProps } from "./PrimaryButton";
import { SecondaryButtonProps } from "./SecondaryButton";
import styled from "styled-components";

export default { title: "Buttons" };

const PrimaryTemplate = (args: PrimaryButtonProps) => {
  const { icon, ...props } = args;
  return (
    <ContainerThemes>
      <PrimaryButton {...props} />
    </ContainerThemes>
  );
};
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  children: "Primary Button",
  disabled: false,
  size: "large",
};

const SecondaryTemplate = (args: SecondaryButtonProps) => {
  const { icon, ...props } = args;
  return (
    <ContainerThemes>
      <SecondaryButton {...props} />
    </ContainerThemes>
  );
};
export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  children: "Secondary Button",
  disabled: false,
  size: "large",
};

const NeutralTemplate = (args: NeutralButtonProps) => {
  const { icon, ...props } = args;
  return (
    <ContainerThemes>
      <NeutralButton {...props} />
    </ContainerThemes>
  );
};
export const Neutral = NeutralTemplate.bind({});
Neutral.args = {
  children: "Neutral Button",
  disabled: false,
  size: "large",
};

const ContainerThemes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  height: 100px;
`;
