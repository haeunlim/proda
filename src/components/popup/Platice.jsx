import ApplyPopCarousel from "@components/carousel/ApplyPopCarousel";
import { useState, useEffect } from "react";

const Done = () => {
  <div className="more_re_wrap">
    <div className="more_top">
      <p>이 공고에도 지원해보세요.</p>
      <div className="count_wrap">
        <span>1/3</span>
      </div>
    </div>
    <ApplyPopCarousel />
    <div className="nt_sec">
      <p>
        *지원 후에 이력서 내용을 수정해도, 지원한 이력서는 수정된 내용으로
        바뀌지 않습니다.
      </p>
      <p>*지원자 현황통계는 지원하신 채용공고에서 확인 가능합니다.</p>
    </div>
  </div>;
};

const Form = ({ applyState }) => {
  applyState = true;
  const handleHidden = () => {
    applyState(false);
  };

  <form action="">
    <fieldset>
      <legend>프로채용 지원하기</legend>
      <div className="input_row">
        <select name="" id="">
          <option value="">지원분야를 선택해주세요</option>
        </select>
      </div>

      <p className="pop_stl">지원이력서</p>
      <div className="resume_sec">
        <p className="res_ttl">
          준비된 애견 미용사 박지애입니다. 최선을 다하겠습니다!
        </p>
        <div className="res_bot">
          <div className="res_info">
            <span>crazy830727@naver.com</span>
            <span>010-9787-5168</span>
          </div>
          <button type="button" className="mod_btn">
            수정
          </button>
        </div>
      </div>

      <p className="pop_stl">
        파일첨부<span>0</span>
      </p>
      <div className="msg_sec">
        <p>추가로 항목을 첨부할 수 있습니다.</p>
      </div>

      <div className="nt_sec">
        <p>
          *개인정보보호를 위해 개인정보가 포함된 파일은 사전동이 없이 삭제될 수
          있습니다.
        </p>
        <p>*제출서류는 채용 마감 후 90일까지 지원기업에게 제공됩니다.</p>
        <p> 제출에 동의할 경우에만 [지원하기]버튼을 클릭해 주세요.</p>
        <p> 동의하지 않을 경우 입사지원이 불가능합니다.</p>
      </div>

      <button type="button" className="pop_done_btn" onClick={handleHidden}>
        지원하기
      </button>
    </fieldset>
  </form>;
};

const ApplyPop = ({ setPreview }) => {
  const [previewData, setPreviewData] = useState("");
  const [previewShow, setpreviewShow] = useState(false);
  const handleHidden = () => {
    setPreview(false);
  };

  return (
    <div className={`popup ${previewShow ? "on" : ""}`} id="">
      <div className="pop_wrap">
        <h2 className="pop_ttl">{state == true ? "지원하기" : "입사지원"}</h2>
        {applyState ? <Form /> : <Done />}
        <button
          type="button"
          className="pop_close"
          onClick={handleHidden}
        ></button>
      </div>
    </div>
  );
};

export default ApplyPop;
