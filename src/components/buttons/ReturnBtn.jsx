import React from "react";
import styled from "styled-components";
import { BtnBig2 } from "./Buttons";

const ReturnBtnStyled = styled(BtnBig2)`
  max-width: 300px;
`;
const MoreBtnStyled = styled(BtnBig2)`
  max-width: 300px;

  @media ${(props) => props.theme.mobile} {
    max-width: 17.307rem;
  }
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
export function MoreBtn({ onClick }) {
  return (
    <>
      <MoreBtnStyled onClick={onClick}>더보기</MoreBtnStyled>
    </>
  );
}
