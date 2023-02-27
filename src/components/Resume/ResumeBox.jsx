import React from "react";

export default function ResumeBox({ label, contetns }) {
  return (
    <article class="sv_row">
      <p class="label">{label}</p>
      {contetns}
    </article>
  );
}
