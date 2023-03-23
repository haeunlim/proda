import Btn from "@components/buttons/Btn";
import React from "react";

export default function ResumeRecommend({ onEvent }) {
  return (
    <div className="sv_info_top">
      <div className="sv_txt">
        <p>이 인재의 모든 정보가 궁금하세요?</p>
        <p className="stl">
          이력서 열람 상품을 이용하시면, <span>전체내용 확인</span>과
          <span>포지션 제안</span>을 하실 수 있습니다.
        </p>
      </div>
      <div className="btn_wrap flex_c_c">
        <Btn text="연락처 확인" btnName="bg-point" />
        <Btn text="포지션 제안하기" btnName="bg-blue3" onEvent={onEvent} />
      </div>
    </div>
  );
}
