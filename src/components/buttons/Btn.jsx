import React from "react";
import PropTypes from "prop-types";

export default function Btn({
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

function BgBtn({
  widthAuto,
  typeVal = "button",
  text,
  btnName,
  bgSize,
  bgImg,
  onEvent,
  hrefVal,
}) {
  return (
    <button
      type={typeVal}
      className={`btn ${btnName}`}
      onClick={onEvent}
      data-href={hrefVal}
      style={{
        backgroundPosition: "center",
        backgroundSize: { bgSize },
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bgImg})`,
        width: widthAuto ? "auto" : "",
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

function SmallBtn({
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

function BigBtn({
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
