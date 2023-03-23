import React from "react";

export default function InputGroup({ children }) {
  return <div className="input_group">{children}</div>;
}
export function InputWrap({ children }) {
  return <div className="input_wrap">{children}</div>;
}
export function InputRow({ children, fullBtn, phone, email, asideBtn }) {
  return (
    <div
      className={`input_row ${fullBtn ? "full_btn_row" : ""} ${
        phone ? "ph_row" : ""
      } ${email ? "email_row" : ""} ${asideBtn ? "aside_btn" : ""}`}
    >
      {children}
    </div>
  );
}
