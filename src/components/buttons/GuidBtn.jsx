import React from "react";
import styled from "styled-components";

const GuideBtnStyled = styled.button`
  height: 32px;
  padding: 0 14px;
  color: #454545;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
`;
export default function GuidBtn() {
  return <GuideBtnStyled>상품안내</GuideBtnStyled>;
}
