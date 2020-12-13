import React, { FC } from 'react';

const CardBody: FC = ({ children, ...other }) => (
  <div {...other}>{children}</div>
);

export default CardBody;
