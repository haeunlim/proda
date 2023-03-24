import React from "react";
import styled from "styled-components";
import arrowDown from "@img/btn/all_menu_arrowdown.png";
import arrowUp from "@img/btn/all_menu_arrowup.png";
const NavButtonStyled = styled.button`
  display: block;
  width: 100%;
  line-height: 43px;
  padding: 0 22px;
  font-size: 14px;
  font-weight: 500;
  color: #252525;
  text-align: left;
  text-transform: uppercase;
  background: url(${arrowDown}) no-repeat right 22px center/12px auto;

  ${(p) =>
    p.active &&
    css`
      background-image: url(${arrowUp});
    `}
`;

export default function NavButton({ children, active = false }) {
  return <NavButtonStyled active={active}>{children}</NavButtonStyled>;
}
