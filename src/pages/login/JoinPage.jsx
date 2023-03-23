import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MemberTtl from "@components/ttl/MemberTtl";
import Btn from "@components/buttons/Btn";
import JoinForm from "@components/form/JoinForm";

const JoinPage = () => {
  const location = useLocation();
  const code = "member";
  const category = "join";
  const ttl = [
    "프로다 개인 회원가입",
    "이메일로 가입하기",
    "기업회원 가입하기",
  ];

  return (
    <>
      <Header />

      <div id="container" className={`sub ${code} ${category} `}>
        <div className="inner">
          <MemberTtl
            ttl={
              location.pathname == "/member/join" ? (
                ttl[0]
              ) : (
                <>
                  {location.pathname == "/member/join_form" ? ttl[1] : ttl[2]}
                </>
              )
            }
          />
          {location.pathname == "/member/join" ? (
            <>
              <div className="how_join_wrap">
                <Btn
                  text="네이버 간편 가입하기"
                  BigBtn
                  bold
                  btnName="join_naver_btn"
                />
                <Btn
                  text="카카오톡 간편 가입하기"
                  BigBtn
                  bold
                  btnName="join_kakao_btn"
                />
                <Link to="/member/join_form" className="btn join_email bigBtn">
                  이메일 간편 가입하기
                </Link>
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
