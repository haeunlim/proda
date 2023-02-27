import React from "react";
import ApplyPopCarousel from "@components/carousel/ApplyPopCarousel";

export default function Done() {
  return (
    <>
      <div class="msg_sec">
        <p class="alert">입사지원이 완료되었습니다.</p>
      </div>
      <div className="more_re_wrap">
        <ApplyPopCarousel />
        <div className="nt_sec">
          <p>
            *지원 후에 이력서 내용을 수정해도, 지원한 이력서는 수정된 내용으로
            바뀌지 않습니다.
          </p>
          <p>*지원자 현황통계는 지원하신 채용공고에서 확인 가능합니다.</p>
        </div>
      </div>
    </>
  );
}
