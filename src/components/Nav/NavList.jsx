import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: ${(p) => (p.expanded ? "block" : "none")};

  padding: 14px 30px;
  background: #f9f9f9;
`;

function NavList({ children, expanded = true }) {
  return <List expanded={expanded}>{children}</List>;
}

export default NavList;
