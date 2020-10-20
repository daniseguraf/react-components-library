import React, { FC } from "react";

const Card: FC = ({ children, ...other }) => (
  <div className="ds-card" {...other}>
    {children}
  </div>
);

export default Card;
