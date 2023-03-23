import React from "react";

export default function ResumeBox({ label, addLabel, children }) {
  return (
    <article className="sv_row">
      <p className="label">
        {label}
        {addLabel ? <span>{addLabel}</span> : ""}
      </p>
      {children}
    </article>
  );
}
