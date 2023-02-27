import React from "react";
import ResumeBox from "./ResumeBox";

export default function ResumeCareer() {
  return (
    <ResumeBox label="학력">
      <p class="label">
        경력 <span>경력 3년 이상</span>
      </p>
      <div class="sv_log t_ct">
        <div class="log_top">
          <p class="sv_guide">
            김 ○○님은 <b>최근 ○○○○ 테크니션</b>으로 근무 하였습니다.
          </p>
          <p class="disc">
            이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을 확인 할 수
            있습니다.
          </p>
        </div>
        <button type="button" class="btnst04">
          경력사항 확인하기
        </button>
      </div>
    </ResumeBox>
  );
}
