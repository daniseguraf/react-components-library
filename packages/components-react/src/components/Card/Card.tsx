import React, { FC } from "react";
import styled from "styled-components";
import theme from "./../../themes/default";

const CardElement = styled.div`
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid #ececec;
  border-radius: ${theme.borderRadius};
  width: 100%;
`;

const Card: FC = ({ children, ...other }) => (
  <CardElement {...other}>{children}</CardElement>
);

export default Card;
