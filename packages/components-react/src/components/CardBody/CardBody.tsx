import React, { FC } from "react";
import styled from "styled-components";

const CardBodyElement = styled.div`
  padding: 1rem;
  background: #ffffff;
`;

const CardBody: FC = ({ children, ...other }) => (
  <CardBodyElement {...other}>{children}</CardBodyElement>
);

export default CardBody;
