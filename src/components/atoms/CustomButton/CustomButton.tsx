import * as React from "react";
import classNames from 'classnames';

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
  console.log('onCLic   ', onClick);
  return (
    <button {...rest} onClick={() => onClick!('comp')} className={`btn-component ${className}`} >
      {children}
    </button>
  );
};

export default CustomButton;
