import React from "react";

export default function BtnWrap({ children, className }) {
  return <div className={`btn_wrap ${className}`}>{children}</div>;
}
