import styled from 'styled-components';

export const ElementsMarginBottom = styled.div`
   & > * {
    margin-right: 1rem;
    margin-bottom: 1rem;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
`;
