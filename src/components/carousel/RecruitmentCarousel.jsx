import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";

import img01 from "@img/ex/exslide_img01.png";
import img02 from "@img/ex/exslide_img02.png";
import ico01 from "@img/ex/exico01.png";
import ico02 from "@img/ex/exico02.png";

export default class RecruitmentCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <Slider {...settings}>
        <div className="item">
          <Link
            to="/recruitment/view"
            className="thumb_img"
            style={{ backgroundImage: `url(${img01})` }}
          ></Link>
          <div className="info_row">
            <div className="info">
              <div
                className="com_ico"
                style={{ backgroundImage: `url(${ico01})` }}
              ></div>
              <div className="info_txt">
                <Link to="/recruitment/company" className="com_name">
                  어나더베이비
                </Link>
                <Link to="/recruitment/view" className="subject">
                  어나더베이비에서 애견미용사를 모시려합니다
                </Link>
              </div>
            </div>
            <Link to="/recruitment/#!" className="em_link">
              바로 지원하기
            </Link>
          </div>
        </div>
        <div className="item">
          <Link
            to="/recruitment/view"
            className="thumb_img"
            style={{ backgroundImage: `url(${img02})` }}
          ></Link>
          <div className="info_row">
            <div className="info">
              <div
                className="com_ico"
                style={{ backgroundImage: `url(${ico02})` }}
              ></div>
              <div className="info_txt">
                <Link to="/recruitment/company" className="com_name">
                  VIO동물의료센터 수의테크니션
                </Link>
                <Link to="/recruitment/view" className="subject">
                  VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터
                  노원점 수의테크니션 (동물간
                </Link>
              </div>
            </div>
            <Link to="/recruitment/#!" className="em_link">
              바로 지원하기
            </Link>
          </div>
        </div>
        <div className="item">
          <Link
            to="/recruitment/view"
            className="thumb_img"
            style={{ backgroundImage: `url(${img01})` }}
          ></Link>
          <div className="info_row">
            <div className="info">
              <div
                className="com_ico"
                style={{ backgroundImage: `url(${ico01})` }}
              ></div>
              <div className="info_txt">
                <Link to="/recruitment/company" className="com_name">
                  VIO동물의료센터 수의테크니션
                </Link>
                <Link to="/recruitment/view" className="subject">
                  VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터
                  노원점 수의테크니션 (동물간
                </Link>
              </div>
            </div>
            <Link to="/recruitment/#!" className="em_link">
              바로 지원하기
            </Link>
          </div>
        </div>
        <div className="item">
          <Link
            to="/recruitment/view"
            className="thumb_img"
            style={{ backgroundImage: `url(${img02})` }}
          ></Link>
          <div className="info_row">
            <div className="info">
              <div
                className="com_ico"
                style={{ backgroundImage: `url(${ico02})` }}
              ></div>
              <div className="info_txt">
                <Link to="/recruitment/company" className="com_name">
                  어나더베이비
                </Link>
                <Link to="/recruitment/view" className="subject">
                  어나더베이비에서 애견미용사를 모시려합니다
                </Link>
              </div>
            </div>
            <Link to="/recruitment/#!" className="em_link">
              바로 지원하기
            </Link>
          </div>
        </div>
      </Slider>
    );
  }
}
