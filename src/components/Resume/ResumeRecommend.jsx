import React from "react";

export default function ResumeRecommend() {
  return (
    <div className="sv_info_top">
      <div className="sv_txt">
        <p>이 인재의 모든 정보가 궁금하세요?</p>
        <p className="stl">
          이력서 열람 상품을 이용하시면, <span>전체내용 확인</span>과{" "}
          <span>포지션 제안</span>을 하실 수 있습니다.
        </p>
      </div>
      <div className="btn_box">
        <button type="button" className="btnst02">
          연락처 확인
        </button>
        <button type="button" className="btnst04 po_popbtn">
          포지션 제안하기
        </button>
      </div>
    </div>
  );
}
