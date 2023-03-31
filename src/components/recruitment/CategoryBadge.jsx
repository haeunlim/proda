import React from "react";
import styled from "styled-components";
const BadgeStyled = styled.span`
  display: inline-block;
  text-align: center;
  border-radius: 0.2em;
  font-size: inherit;
  padding: 0 0.5333em;
  line-height: 1.7333em;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
`;

export default function CategoryBadge({ children, color }) {
  if (color == "red") {
    color = "#ed5669";
  } else if (color == "org") {
    color = "#ff8a00";
  } else if (color == "blue") {
    color = "#3762ff";
  } else if (color == "purple") {
    color = "#8f65fc";
  } else if (color == "green") {
    color = "#2ace92";
  } else {
    color = "#707e8e";
  }
  return <BadgeStyled color={color}>{children}</BadgeStyled>;
}
