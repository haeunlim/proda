import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruitmentList from "@components/list/RecruitmentList";
import TopProList from "@components/list/TopProList";
import MainSlider from "@components/carousel/MainBannerCarousel";
import videoImg from "@assets/img/main/video_img.jpg";
import { MainTtl, MainTtlBot } from "@components/ttl/titleStyled";
import { BtnBig } from "@components/buttons/Buttons";
import styled from "styled-components";

const MainBtn = styled(BtnBig)`
  width: auto;
  padding: 0 1.75rem;
  box-shadow: 0 0.875rem 1.5rem rgba(1, 216, 223, 0.36);
  border-radius: 1.8125rem;

  @media ${(props) => props.theme.mobile} {
    padding: 0 1.3076rem;
    border-radius: 1.5384rem;
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
            <MainTtl>
              너도 프로, 나도 프로
              <br />
              우리는 프로다.
            </MainTtl>
            <MainTtlBot>반려동물 종사자들의 전문 커리어 공간</MainTtlBot>
            <MainBtn bgPoint bold lack>
              지금 프로다에서 시작하세요.
            </MainBtn>
          </div>
        </section>
        <section className="recruitment">
          <div className="inner">
            <RecruitmentList />
            <MainSlider />
          </div>
        </section>
        <section className="top_pro">
          <div className="inner">
            <TopProList />
          </div>
        </section>
      </div>
      <Footer asideHide={asideHide} />
    </>
  );
};

export default MainPage;
