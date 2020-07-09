import * as React from "react";
import "./CustomButton.scss";

export interface CustomButtonInterface {
  children: React.ReactNode;
  className?: string;
  onClick?: (e:any) => void,
}

const CustomButton = ({
  children,
  className,
  onClick,
  ...rest
}: CustomButtonInterface) => {
  return (
    <button {...rest} onClick={() => onClick!('comp')} className={`btn-component ${className}`} >
      {children}
    </button>
  );
};

export default CustomButton;
