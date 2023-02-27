import React from "react";

import { Link } from "react-router-dom";

import AsideMenu from "@components/Aside";


const Footer = () => {
    return (
        <>
        <AsideMenu/>
         <footer id="footer">
    <div className="inner">
        <div className="foot_top">
            <h1 className="foot_logo">
                <Link to="/main">p 프로다</Link>
            </h1>
            <div className="footer_link">
                <Link to="/terms/terms">이용약관</Link>
                <Link to="/terms/privacy" className="color_b2">개인정보처리방침</Link>
                <Link to="/terms/email">이메일 무단수집거부</Link>
                <Link to="/terms/contact">고객센터</Link>

            </div>
        </div>
        <div className="foot_info">
            <div className="left">
                <address className="only_web">
                    <span>㈜마이주주(대표이사 : 김선희) </span><small></small>
                    <span className="address">서울특별시 송파구 문정로 11-1, 준영빌딩 5층</span><br/>
                    <span>사업자등록번호 : 000-00-00000 </span><small></small>
                    <span>통신판매번호 : 2022-서울송파-0000</span><br/>
                    <span><Link to="tel:1588-0000">고객센터 : 대표번호 1588-0000</Link></span><small></small>
                    <span>팩스 02-0000-0000</span><small></small>
                    <span><Link to="mailto:center@petproda.co.kr">center@petproda.co.kr</Link></span><small></small>
                    <span>개인정보 관리책임자 : 김세연</span>
                </address>
                <address className="only_mo">
                    <p>㈜마이주주(대표이사 : 김선희) </p>
                    <p className="address">서울특별시 송파구 문정로 11-1, 준영빌딩 5층</p>
                    <p>사업자등록번호 : 000-00-00000 </p>
                    <p>통신판매번호 : 2022-서울송파-0000</p>
                    <span><Link to="tel:1588-0000">고객센터 : 대표번호 1588-0000</Link></span><small></small>
                    <span>팩스 02-0000-0000</span>
                    <span><Link to="mailto:center@petproda.co.kr">center@petproda.co.kr</Link></span><small></small>
                    <span>개인정보 관리책임자 : 김세연</span>
                </address>
                <p className="copy">Copyright © MYJUJU CO., LTD. ALL RIGHTS RESERVED</p>
            </div>
            <div className="sns_list">
                <Link to="#!" className="insta"></Link>
                <Link to="#!" className="youtube"></Link>
                <Link to="#!" className="facebook"></Link>
                <Link to="#!" className="blog"></Link>
                <Link to="#!" className="apple"></Link>
                <Link to="#!" className="playstore"></Link>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}

export default Footer