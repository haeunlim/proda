import React from "react";

export default function Share() {
  return (
    <>
      <p class="pop_sub_ttl">
        이 포지션과 어울리는 사람을 알고 있다면 공유해주세요.
      </p>

      <div class="share_sec">
        <input type="text" placeholder="http://naver.com" />
        <button type="button" class="btnst01">
          복사
        </button>
      </div>
    </>
  );
}
