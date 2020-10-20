import React, { FC } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "primary" | "ghost";
}

const Button: FC<ButtonProps> = ({ children, kind, ...other }) => {
  return <button className="ds-btn ds-btn-primary">{children}</button>;
};

export default Button;
