import React from "react";
import PropTypes from "prop-types";
export default function Btn({
  BigBtn,
  BgPoint,
  SmallBtn,
  widthAuto,
  typeVal = "button",
  text,
  btnName,
  hrefVal,
  bold,
  bgImg,
  bgPosition,
  value,
  onClick,
}) {
  return (
    <button
      type={typeVal}
      className={`btn ${btnName} ${BigBtn ? "bigBtn" : ""} ${
        BgPoint ? "bg-point" : ""
      } ${SmallBtn ? "smallBtn" : ""}`}
      onClick={onClick}
      data-href={hrefVal}
      style={{
        width: widthAuto ? "auto" : "",
        fontWeight: bold ? "600" : "500",
        backgroudnImage: { bgImg },
        backgroundPosition: { bgPosition },
      }}
      value={value}
    >
      {text}
    </button>
  );
}

export function BgBtn({
  widthAuto,
  typeVal = "button",
  text,
  onEvent,
  bold,
  hrefVal,
}) {
  return (
    <button
      type={typeVal}
      className={`btn bg-point`}
      onClick={onEvent}
      data-href={hrefVal}
      style={{
        width: widthAuto ? "auto" : "",
        fontWeight: bold ? "600" : "500",
      }}
    >
      {text}
    </button>
  );
}
Btn.prototypes = {
  text: PropTypes.string,
  btnName: PropTypes.string,
};

export function SmallBtn({
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
      className={`btn smallBtn ${btnName}`}
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

export function BigBtn({
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
      className={`btn bigBtn ${btnName}`}
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
