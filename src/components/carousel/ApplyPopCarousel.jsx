import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";

export default class ApplyPopCarousel extends Component {
  state = {
    activeSlide: 1,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
    };

    return (
      <>
        <div className="more_top">
          <p>이 공고에도 지원해보세요.</p>
          <div className="count_wrap">
            <span>{this.state.activeSlide}/3</span>
          </div>
        </div>
        <div className="more_re_slide">
          <Slider {...settings}>
            <div className="item_sec">
              <div className="item_top">
                <Link to="employ_comp" className="com_name">
                  어나더베이비
                </Link>
                <Link to="employ_view" className="subject">
                  어나더베이비에서 애견미용사를 모시려합니다
                </Link>
              </div>
              <div className="item_bot">
                <span>신입/서울</span>
                <div className="bot_wrap">
                  <div>
                    <button type="button" className="app_now">
                      즉시지원
                    </button>
                    <span className="date">D-20</span>
                  </div>
                  <button type="button" className="bookmark_btn"></button>
                </div>
              </div>
            </div>

            <div className="item_sec">
              <div className="item_top">
                <Link to="employ_comp" className="com_name">
                  어나더베이비
                </Link>
                <Link to="employ_view" className="subject">
                  어나더베이비에서 애견미용사를 모시려합니다
                </Link>
              </div>
              <div className=" item_bot">
                <span>신입/서울</span>
                <div className="bot_wrap">
                  <div>
                    <button type="button" className="app_now">
                      즉시지원
                    </button>
                    <span className="date">D-20</span>
                  </div>
                  <button type="button" className="bookmark_btn"></button>
                </div>
              </div>
            </div>
            <div className="item_sec">
              <div className="item_top">
                <Link to="employ_comp" className="com_name">
                  어나더베이비
                </Link>
                <Link to="employ_view" className="subject">
                  어나더베이비에서 애견미용사를 모시려합니다
                </Link>
              </div>
              <div className="item_bot">
                <span>신입/서울</span>
                <div className="bot_wrap">
                  <div>
                    <button type="button" className="app_now">
                      즉시지원
                    </button>
                    <span className="date">D-20</span>
                  </div>
                  <button type="button" className="bookmark_btn"></button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
