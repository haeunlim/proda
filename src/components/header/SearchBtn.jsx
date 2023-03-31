import React from "react";
import styled from "styled-components";
import searchIcon from "@img/ico/search.png";
export const SearchBtnStyled = styled.button`
  display: block;
  width: 42px;
  height: 42px;
  font-size: 0;
  background: var(--bs-point) url(${searchIcon}) no-repeat center;
  border-radius: 50%;
  font-size: 0;
  @media ${(props) => props.theme.mobile} {
    width: 34px;
    height: 34px;
    background-size: 19px auto;
  }
`;

export default function SearchBtn({ onClick }) {
  return <SearchBtnStyled onClick={onClick}></SearchBtnStyled>;
}
