import React from "react";
import ico01 from "@img/ex/exico01.png";

function changedClassName(e) {
  e.target.classList.toggle("on");
}
const ViewInfoBot = () => {
  return (
    <div className="view_info_bot">
      <div className="view_info">
        <dl>
          <dt>마감일</dt>
          <dd>2022.02.04</dd>
        </dl>
        <dl>
          <dt>근무지역</dt>
          <dd>서울특별시 구로구 디지털로</dd>
        </dl>
      </div>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6332.222390173638!2d126.88751272629695!3d37.481702298803874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e24138ba17b%3A0x46790617736f528a!2z7ISc7Jq47Yq567OE7IucIOq1rOuhnOq1rCDrlJTsp4DthLjroZwyNuq4uA!5e0!3m2!1sko!2skr!4v1673338497164!5m2!1sko!2skr"
          border="0"
        ></iframe>
        {/* <iframe src="" width="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe> */}
      </div>

      <div className="comp_info">
        <div className="comp_top">
          <span
            className="ico"
            style={{ backgroundImage: `url(${ico01})` }}
          ></span>
          <div className="info_txt">
            <a href="employ_comp.php" className="comp_name">
              어나더베이비
            </a>
            <p className="comp_category">애견미용실</p>
          </div>
        </div>
        <div className="comp_bot">
          <div className="comp_subject" onClick={changedClassName}>
            <span>
              본 채용정보는 프로다의 동의없이 무단전재, 재배포, 재가공할
              수 없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
            </span>
          </div>
          <div className="comp_desc">
            본 채용 정보는 업체명에서 제공한 자료를 바탕으로 프로다에서 표현을
            수정하고 이의 배열 및 구성을 편집하여 완성한 프로다의 저작자산 이자
            영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에 대하여
            프로다의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수
            없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로
            사용될 수 없습니다. 프로다는 업체명에서 게재한 자료에 대한 오류나 그
            밖에 프로다가 가공하지 않은 정보의 내용상 문제에 대하여 어떠한
            보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을
            지지 않습니다. &lt;저작권자 ㈜마이주주. 무단전재-재배포금지 &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInfoBot;
