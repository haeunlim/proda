import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";
import ComIco from "@img/ico/com_ico32x32.jpg";
import { SectTtl, SectTtlBox } from "@components/ttl/titleStyled";

export default class ChoiceCarousel extends Component {
  state = {
    activeSlide: 1,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
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
        to: "/academy/academy_view",
        toCompany: "/employ/employ_comp",
        ico: ComIco,
        category: "세미나",
        com: "프로다",
        subject: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      },
      {
        to: "/academy/academy_view",
        toCompany: "/employ/employ_comp",
        ico: ComIco,
        category: "취업꿀팁",
        com: "프로다",
        subject: `[서울특별시 특별강연] 피곤한 개 가 행복하다! 반려지식,
        급 충전`,
      },
      {
        to: "/academy/academy_view",
        toCompany: "/employ/employ_comp",
        ico: ComIco,
        category: "공지사항",
        com: "프로다",
        subject: `[서울특별시 특별강연] 피곤한 개 가 행복하다! 반려지식,
        급 충전`,
      },
    ];

    return (
      <div className="choice_wrap">
        <SectTtlBox className="flex_b_c">
          <SectTtl big>프로다's 선택</SectTtl>
          <div className="fraction">
            <span>{this.state.activeSlide}/8</span>
          </div>
        </SectTtlBox>
        <div className="choice_item">
          <Slider {...settings}>
            {data.map((item, index) => {
              let categoryCode;
              if (item.category == "세미나") {
                categoryCode = "sem";
              } else if (item.category == "공지사항") {
                categoryCode = "nti";
              } else if (item.category == "취업꿀팁") {
                categoryCode = "tip";
              }

              return (
                <div className={`item ${categoryCode}`} key={index}>
                  <p className="cate">{item.category}</p>
                  <Link to={item.to} className="subject">
                    {item.subject}
                  </Link>
                  <Link to={item.toCompany} className="comp_info">
                    <span
                      className="ico"
                      style={{ backgroundImage: `url(${item.ico})` }}
                    ></span>
                    {item.com}
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
