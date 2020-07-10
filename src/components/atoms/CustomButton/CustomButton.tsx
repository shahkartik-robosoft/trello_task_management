import * as React from "react";
import "./CustomButton.scss";

export interface CustomButtonInterface {
  children: React.ReactNode;
  className?: string;
  onClick?: (e:any) => void,
  style?: {},
}

const CustomButton = ({
  children,
  className,
  onClick,
  ...rest
}: CustomButtonInterface) => {
  return (
    <button {...rest} onClick={(e) => onClick!(e)} className={`btn-component ${className}`} >
      {children}
    </button>
  );
};

export default CustomButton;
