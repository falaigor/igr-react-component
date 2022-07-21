import React from "react";
import { Color } from "../../constants/colors";

import "./loadingIndicator.scss";

interface Props {
  dotSize: number;
  dotColor?: string;
}

export const LoadingIndicator: React.FC<Props> = ({
  dotSize,
  dotColor = `rgb(${Color.PrimaryOne})`,
  ...otherProps
}) => {
  const style = {
    "--loading-dot-color": dotColor,
    "--loading-dot-size": `${dotSize}px`,
  } as React.CSSProperties;

  return (
    <div className="axr-loading-indicator" style={style} {...otherProps}>
      <div className="axr-loading-dot" />
      <div className="axr-loading-dot" />
      <div className="axr-loading-dot" />
    </div>
  );
};
