import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruitmentList from "@components/list/RecruitmentList";
import TopProList from "@components/list/TopProList";
import BigBtn from "@components/buttons/Btn";
import MainSlider from "@components/carousel/MainBannerCarousel";

import videoImg from "@assets/img/main/video_img.jpg";
import Btn from "@components/buttons/Btn";

const MainPage = () => {
  return (
    <>
      <Header />
      <div id="container" className="main_container">
        <div className="main">
          <div className="video">
            <video
              src=""
              poster={videoImg}
              playsInline
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <section className="sect1">
          <div className="inner">
            <div className="main_ttl_box">
              <h2>
                너도 프로, 나도 프로
                <br />
                우리는 프로다.
              </h2>
              <p>반려동물 종사자들의 전문 커리어 공간</p>
              <Btn
                text="지금 프로다에서 시작하세요."
                BigBtn
                btnName="bgBtn"
                widthAuto
              />
            </div>
          </div>
        </section>
        <section className="recruitment">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">프로채용 기업</h3>
              <Btn text="상품안내" widthAuto btnName="guideBtn" />
            </div>

            <div className="item_list_wrap">
              <RecruitmentList />
            </div>
            <MainSlider />
          </div>
        </section>
        <section className="top_pro">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">top 프로</h3>
              <Btn text="상품안내" widthAuto btnName="guideBtn" />
            </div>
            <TopProList />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
