import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruitmentList from "@components/list/RecruitmentList";
import TopProList from "@components/list/TopProList";
import MainSlider from "@components/carousel/MainBannerCarousel";
import videoImg from "@assets/img/main/video_img.jpg";
import GuidBtn from "@components/buttons/GuidBtn";

const MainPointBtn = styled.button`
  padding: 0 28px;
  display: block;
  text-align: center;
  box-shadow: 0 0.6875rem 1.2rem rgba(1, 216, 223, 0.25);
  height: 58px;
  font-size: 18px;
  color: #fff;
  background-color: ${(props) => props.theme.point};
  border-radius: 29px;
  border-color: ${(props) => props.theme.point};
  font-weight: 500;
  @media ${(props) => props.theme.mobile} {
    border-radius: 20px;
    padding: 0 14px;
    height: 40px;
    font-size: 14px;
  }
`;

const MainPage = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [asideHide, setAsideHide] = useState(1);

  // 따라다니는 asdie 메인에서만 사라졌다가 나타나게
  const handleFollow = () => {
    const sect1Top = document.querySelector(".sect1").offsetTop;
    const headerH = document.getElementById("header").clientHeight;
    let showPoint = sect1Top - headerH; // section1+header 높이
    setScrollY(window.pageYOffset);
    if (ScrollY > showPoint) {
      setAsideHide(false);
    } else {
      setAsideHide(true);
    }
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

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
              <MainPointBtn>지금 프로다에서 시작하세요.</MainPointBtn>
            </div>
          </div>
        </section>
        <section className="recruitment">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">프로채용 기업</h3>
              <GuidBtn />
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
              <GuidBtn />
            </div>
            <TopProList />
          </div>
        </section>
      </div>
      <Footer asideHide={asideHide} />
    </>
  );
};

export default MainPage;
