import React from "react";
import styled from "styled-components";

const Item = styled.li`
  border-bottom: 1px solid #eee;
`;

function NavItem({ children, disabled = false }) {
  return <Item role={disabled ? "presentation" : null}>{children}</Item>;
}

export default NavItem;
