import React from "react";
import styled from "styled-components";
export const SelectBoxStyled = styled.div`
  width: 100%;
`;
export default function SelectBox({ children }) {
  return (
    <SelectBoxStyled className="select_box flex__c">{children}</SelectBoxStyled>
  );
}
