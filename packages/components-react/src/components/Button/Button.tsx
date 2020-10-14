import React, { FC } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "primary" | "ghost";
}

const Button: FC<ButtonProps> = ({ children, kind, ...other }) => {
  return (
    <button kind={kind} {...other}>
      {children}
    </button>
  );
};

export default Button;
