import * as React from "react";

import "./Text.scss";

export type textSizeType = "lg" | "xl";
export type textColorType = "white" | "black" | "gray";
export type textWeightType = "bold" | "normal";

export interface TextProps {
  textLabel: string;
  fontSize?: textSizeType;
  color?: textColorType;
  className?: string;
  weight?: textWeightType;
  style?: {};
  onClick?: (e: any) => void;
}

const Text = ({
  textLabel,
  className,
  fontSize,
  color,
  weight,
  style,
                onClick,
}: TextProps) => {
  let textSize = `text-wrapper--text-${fontSize ? fontSize : "base"}`;
  let textColor = `text-wrapper--text-${color ? color : "white"}`;
  let textWeight = `text-wrapper--text-${weight ? weight : "normal"}`;

  return (
    <p
      style={style}
      className={`text-wrapper ${textSize} ${textColor} ${textWeight} ${className}`}
      onClick={onClick}
    >
      {textLabel}
    </p>
  );
};

export default Text;
