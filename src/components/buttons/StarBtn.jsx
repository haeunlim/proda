import React from "react";

function changedClassName(e) {
  e.target.classList.toggle("on");
}

export default function StarBtn() {
  return (
    <button type="button" className="star" onClick={changedClassName}></button>
  );
}
