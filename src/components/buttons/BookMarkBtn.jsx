import React from "react";
function changedClassName(e) {
  e.target.classList.toggle("on");
}

export default function BookMarkBtn() {
  return (
    <button
      type="button"
      className="bookmark"
      onClick={changedClassName}
    ></button>
  );
}
