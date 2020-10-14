import styled from "styled-components";
import theme from "./../../themes/default";

const Input = styled.input`
  border: 1px solid ${theme.formControl.borderColor};
  border-radius: ${theme.borderRadius};
  color: ${theme.color.text.dark};
  display: block;
  height: auto;
  margin-bottom: 1rem;
  padding: ${theme.formControl.padding};
  width: 100%;
`;

Input.defaultProps = {
  type: "text",
};

export default Input;
