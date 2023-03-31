import React from "react";
import { SectTtl } from "@components/ttl/titleStyled";
import styled from "styled-components";
const ResumeContTtl = styled(SectTtl)`
  margin-bottom: 20px;

  & + * {
    width: 100%;
    border-top: solid 2px #252525;
  }
  span {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 400;
    color: var(--bs-blue2);
  }
`;

export default function ResumeBox({ label, addLabel, children }) {
  return (
    <article className="sv_row">
      <ResumeContTtl>
        {label}
        {addLabel ? <span>{addLabel}</span> : ""}
      </ResumeContTtl>
      {children}
    </article>
  );
}
