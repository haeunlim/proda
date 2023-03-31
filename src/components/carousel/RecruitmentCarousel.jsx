import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";
import img01 from "@img/ex/exslide_img01.png";
import img02 from "@img/ex/exslide_img02.png";
import ico01 from "@img/ex/exico01.png";
import ico02 from "@img/ex/exico02.png";
import styled from "styled-components";
import { BtnMedium } from "@components/buttons/Buttons";

const DirectBtn = styled(BtnMedium)`
  max-width: 138px;
  border-radius: 21px;
  @media ${(props) => props.theme.mobile} {
    max-width: 110px;
    font-size: 0.923rem;
  }
`;

export default class RecruitmentCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    const data = [
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img01,
        ico: ico01,
        com: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img02,
        ico: ico02,
        com: "VIO동물의료센터 수의테크니션",
        subject:
          " VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터 노원점 수의테크니션 (동물간",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img01,
        ico: ico01,
        com: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img02,
        ico: ico02,
        com: "VIO동물의료센터 수의테크니션",
        subject:
          " VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터 노원점 수의테크니션 (동물간",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img01,
        ico: ico01,
        com: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img02,
        ico: ico02,
        com: "VIO동물의료센터 수의테크니션",
        subject:
          " VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터 노원점 수의테크니션 (동물간",
      },
    ];
    return (
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="item" key={index}>
            <Link
              to={item.to}
              className="thumb_img"
              style={{ backgroundImage: `url(${item.bg})` }}
            ></Link>
            <div className="info_row">
              <div className="info">
                <div
                  className="com_ico"
                  style={{ backgroundImage: `url(${item.ico})` }}
                ></div>
                <div className="info_txt">
                  <Link to={item.toCompany} className="com_name">
                    {item.com}
                  </Link>
                  <Link to="/recruitment/view" className="subject">
                    {item.subject}
                  </Link>
                </div>
              </div>
              <DirectBtn lineLight>바로 지원하기</DirectBtn>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
