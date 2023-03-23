import React from "react";
import styled from "styled-components";

const Button = styled.button`
  max-width: 300px;
  display: block;
  text-align: center;
  width: 100%;
  border: 1px solid #dbdbdb;
  font-weight: 500;
  height: 62px;
  font-size: 20px;
  border-radius: ${(props) => (props.rounded ? "30px;" : "0")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "300px")};
`;

export default function ReturnBtn({ rounded, maxWidth, children }) {
  return (
    <>
      <Button
        onClick={() => history.back(-1)}
        rounded={rounded}
        maxWidth={maxWidth}
      >
        {children}
      </Button>
    </>
  );
}
export function MoreBtn({ rounded, maxWidth, children }) {
  return (
    <>
      <Button rounded={rounded} maxWidth={maxWidth}>
        {children}
      </Button>
    </>
  );
}
