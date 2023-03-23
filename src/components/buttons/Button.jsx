import React from "react";
import styled from "styled-components";

const LoginBtn = styled.button``;
const Button = styled.button`
  display: inline-block;
`;

export default function LoginBtn({
  BigBtn,
  SmallBtn,
  widthAuto,
  typeVal = "button",
  text,
  btnName,
  onEvent,
  hrefVal,
}) {
  return (
    <button
      type={typeVal}
      className={`btn ${btnName} ${BigBtn ? "bigBtn" : ""} ${
        SmallBtn ? "smallBtn" : ""
      }`}
      onClick={onEvent}
      data-href={hrefVal}
      style={{
        width: widthAuto ? "auto" : "",
      }}
    >
      {text}
    </button>
  );
}
