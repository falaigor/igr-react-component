import React from "react";
import { LoadingIndicator as LoadingIndicatorComponent } from ".";

interface LoadingIndicatorProps {
  dotSize: number;
  dotColor?: string;
}

export default {
  title: "LoadingIndicator",
  component: LoadingIndicatorComponent,
  argTypes: {
    dotSize: { control: "number", defaultValue: 8 },
    dotColor: { control: "color", defaultValue: "rgb(255,88,36)" },
  },
};

export const LoadingIndicator = ({
  dotSize,
  dotColor,
}: LoadingIndicatorProps) => (
  <LoadingIndicatorComponent dotSize={dotSize} dotColor={dotColor} />
);
