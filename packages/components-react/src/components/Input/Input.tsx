import React, { FC } from "react";

const Input: FC = () => <input className="ds-input" type="text" />;

Input.defaultProps = {
  type: "text",
};

export default Input;
