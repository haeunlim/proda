import React from "react";
import styled from "styled-components";
import { BtnBig2 } from "./Buttons";

const ReturnBtnStyled = styled(BtnBig2)`
  max-width: 300px;
`;
const MoreBtnStyled = styled(BtnBig2)`
  max-width: 300px;
  border-radius: 30px;
`;

export default function ReturnBtn({ children }) {
  return (
    <>
      <ReturnBtnStyled onClick={() => history.back(-1)}>
        {children}
      </ReturnBtnStyled>
    </>
  );
}
export function MoreBtn({ children }) {
  return (
    <>
      <MoreBtnStyled>{children}</MoreBtnStyled>
    </>
  );
}
