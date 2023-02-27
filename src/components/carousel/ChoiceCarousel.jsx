import React, {Component} from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css"
import "@node/slick-carousel/slick/slick-theme.css";


import ComIco from "@img/ico/com_ico32x32.jpg";


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



};

return (
<div className="choice_wrap">
    <div className="top_row">
        <h3 className="sect_ttl2">프로다's 선택</h3>
        <div className="fraction">
            <span>{this.state.activeSlide}/8</span>
        </div>
    </div>
    <div className="choice_item">

        <Slider {...settings}>
            <div className="item sem">
                <p className="cate">세미나</p>
                <Link to="/academy/academy_view" className="subject">반려동물을 키우기 전에 신중하게
                고려해야 할 8가지</Link>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item sem">
                <p className="cate">세미나</p>
                <Link to="/academy/academy_view" className="subject">반려동물을 키우기 전에 신중하게
                고려해야 할 8가지</Link>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item nti">
                <p className="cate">공지사항</p>
                <a href="#" className="subject">반려동물을 키우기 전에 신중하게
                    고려해야 할 8가지</a>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item tip">
                <p className="cate">취업꿀팁</p>
                <a href="#" className="subject">&#91;서울특별시 특별강연&#93; 피곤한 개
                    가 행복하다! 반려지식, 급 충전&#91;서울특별시 특별강연&#93; 피곤한 개
                    가 행복하다! 반려지식, 급 충전&#91;서울특별시 특별강연&#93; 피곤한 개
                    가 행복하다! 반려지식, 급 충전</a>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item sem">
                <p className="cate">세미나</p>
                <Link to="/academy/academy_view" className="subject">반려동물을 키우기 전에 신중하게
                고려해야 할 8가지</Link>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item sem">
                <p className="cate">세미나</p>
                <Link to="/academy/academy_view" className="subject">반려동물을 키우기 전에 신중하게
                고려해야 할 8가지</Link>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item nti">
                <p className="cate">공지사항</p>
                <a href="#" className="subject">반려동물을 키우기 전에 신중하게
                    고려해야 할 8가지</a>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
            <div className="item tip">
                <p className="cate">취업꿀팁</p>
                <a href="#" className="subject">&#91;서울특별시 특별강연&#93; 피곤한 개
                    가 행복하다! 반려지식, 급 충전&#91;서울특별시 특별강연&#93; 피곤한 개
                    가 행복하다! 반려지식, 급 충전&#91;서울특별시 특별강연&#93; 피곤한 개
                    가 행복하다! 반려지식, 급 충전</a>
                <Link to="/employ/employ_comp" className="comp_info">
                <span className="ico" style={{backgroundImage:`url(${ComIco})`}}></span>
                프로다
                </Link>
            </div>
        </Slider>
    </div>
</div>
);
}
}