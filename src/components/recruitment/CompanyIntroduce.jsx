import React from "react";
import img01 from "@img/main/item01.jpg";
import img02 from "@img/main/item02.jpg";
import img03 from "@img/main/item03.jpg";
import img04 from "@img/main/item04.jpg";

export default function CompanyIntroduce() {
  return (
    <section className="comp_intro">
      <div className="sect_ttl_box">
        <h3 className="sect_ttl">회사소개</h3>
      </div>
      <ul className="company_intro_photo flex col_4">
        <li>
          <div
            className="thumb"
            style={{ backgroundImage: `url(${img01})` }}
            title="어나더베이비에서 애견미용사를 모시려합니다"
          ></div>
        </li>
        <li>
          <div
            className="thumb"
            style={{ backgroundImage: `url(${img02})` }}
            title="VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다"
          ></div>
        </li>
        <li>
          <div
            className="thumb"
            style={{ backgroundImage: `url(${img03})` }}
            title="보호소 상담사 동물관리 경력무관 채용합니다"
          ></div>
        </li>
        <li>
          <button type="button" className="dim">
            <span>더보기+</span>
          </button>
          <div
            className="thumb"
            style={{ backgroundImage: `url(${img04})` }}
            title="[이승진동물의료센터] 수의테크니션 모집(야간근무조)"
          ></div>
        </li>
      </ul>
      <div className="sub_disc_wrap">
        <p>
          애견산업은 반려견의 위생제품 및 각종 용품들을 취급하는 제 1위 기업로
          발돋음 하기 위해 최선을 다하고 있습니다.
        </p>
        <p>
          발빠른 애견산업에 민감하고 신속하게 대응하기 위해 전 사원들이
          노력중입니다.
        </p>
      </div>
    </section>
  );
}
