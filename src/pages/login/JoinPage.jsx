import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JoinForm from "@components/form/JoinForm";
import { MemberTtl, MemberTtlBox } from "@components/ttl/titleStyled";
import {
  JoinHowBtn,
  JoinKakaoBtn,
  JoinNaverBtn,
} from "@components/buttons/MemberButton";

const JoinPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const code = "member";
  const category = "join";
  const title = [
    "프로다 개인 회원가입",
    "이메일로 가입하기",
    "기업회원 가입하기",
  ];

  return (
    <>
      <Header />

      <div id="container" className={`sub ${code} ${category} `}>
        <div className="inner">
          <MemberTtlBox>
            <MemberTtl>
              {location.pathname == "/member/join" ? (
                title[0]
              ) : (
                <>
                  {location.pathname == "/member/join_form"
                    ? title[1]
                    : title[2]}
                </>
              )}
            </MemberTtl>
          </MemberTtlBox>
          {location.pathname == "/member/join" ? (
            <>
              <div className="how_join_wrap">
                <JoinNaverBtn>네이버 간편 가입하기</JoinNaverBtn>
                <JoinKakaoBtn>카카오톡 간편 가입하기</JoinKakaoBtn>
                <JoinHowBtn onClick={() => navigate("/member/join_form")}>
                  이메일 간편 가입하기
                </JoinHowBtn>
              </div>
              <ul className="login_help_row">
                <li>
                  <Link to="/login/login">로그인</Link>
                </li>
                <li>
                  <Link to="/member/join_corporation">
                    <b>기업 회원가입</b>
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              {/* 이메일로 */}
              {location.pathname == "/member/join_form" ? (
                <JoinForm tabOn={0} />
              ) : (
                <JoinForm tabOn={1} />
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinPage;
