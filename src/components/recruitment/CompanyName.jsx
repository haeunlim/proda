import React from "react";
import img01 from "@img/ex/exico01.png";

export default function CompanyName({ text }) {
  return (
    <section className="comp_info">
      <div className="comp_top">
        <span
          className="ico"
          style={{ backgroundImage: `url(${img01})` }}
        ></span>
        <div className="info_txt">
          <p className="comp_name big">{text}</p>
        </div>
      </div>
    </section>
  );
}
