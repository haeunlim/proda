import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import ViewImg from "@img/ex/view_ex.jpg";
import ReturnBtn from "@components/buttons/ReturnBtn";
import { BtnBig } from "@components/buttons/Buttons";

const AcademyView = () => {
  const code = "academy";
  const category = "academy";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${category}`}>
        <div className="inner">
          <Tab code={code} />
        </div>
        <section className="view_sect">
          <div className="inner">
            <div className="view_top_info">
              <div className="board_info">
                <p className="subject">
                  [반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트
                </p>
                <div className="info_list">
                  <dl>
                    <dt>일시</dt>
                    <dd>2022년 02월 24일 (목) 13:30 ~ 16 :00</dd>
                  </dl>
                  <dl>
                    <dt>장소</dt>
                    <dd>온라인라이브</dd>
                  </dl>
                  <dl>
                    <dt>참가비</dt>
                    <dd>온라인라이브</dd>
                  </dl>
                </div>
                <div className="tag_box">
                  <span className="ing">모집중</span>
                  <span className="pay">유료</span>
                </div>
              </div>
              <div className="share_info">
                <div className="sns_list">
                  <a href="#" className="facebook"></a>
                  <a href="#" className="twitter"></a>
                  <a href="#" className="kakao"></a>
                  <a href="#" className="link"></a>
                </div>
                <BtnBig bgPoint className="rounded-2">
                  등록신청
                </BtnBig>
              </div>
            </div>
            <div className="view_content">
              <figure>
                <img src={ViewImg} alt="" />
              </figure>
            </div>
            <div className="btn_wrap flex_c_c">
              <ReturnBtn maxWidth="300px">목록으로</ReturnBtn>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AcademyView;
