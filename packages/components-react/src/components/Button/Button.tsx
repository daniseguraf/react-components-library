import React, { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => (
  <button className="dse-button-container">{label} - Button</button>
);

export default Button;
