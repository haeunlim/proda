import React from "react";
import DefaultBox from "./ResumeBox";

export default function SelfIntroduction() {
  return (
    <DefaultBox label="자기소개서">
      <div class="sv_log t_ct">
        <div class="log_top">
          <p class="sv_guide">
            김 ○○님은 <b> 501자의 자기소개서</b>를 작성하였습니다.
          </p>
          <p class="disc">
            이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을 확인 할 수
            있습니다.
          </p>
        </div>
        <button type="button" class="btnst04">
          전체내용 확인하기
        </button>
      </div>
    </DefaultBox>
  );
}
