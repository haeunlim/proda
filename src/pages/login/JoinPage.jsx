import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JoinForm from "@components/form/JoinForm";
import { MemberTtl, MemberTtlBox } from "@assets/style/fontStyle/title";
import {
  HowJoinBtn,
  JoinHowBtn,
  JoinKakaoBtn,
  JoinNaverBtn,
} from "@assets/style/button/MemberButton";

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
  const [tabOn, setTabOn] = useState();

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
                    ? tabOn == 0
                      ? title[1]
                      : title[2]
                    : ""}
                </>
              )}
            </MemberTtl>
          </MemberTtlBox>
          {location.pathname == "/member/join" ? (
            <>
              <HowJoinBtn>
                <JoinNaverBtn>네이버 간편 가입하기</JoinNaverBtn>
                <JoinKakaoBtn>카카오톡 간편 가입하기</JoinKakaoBtn>
                <JoinHowBtn
                  onClick={() => {
                    navigate("/member/join_form");
                    setTabOn(0);
                  }}
                >
                  이메일 간편 가입하기
                </JoinHowBtn>
              </HowJoinBtn>
              <ul className="login_help_row">
                <li>
                  <Link to="/login/login">로그인</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/member/join_form");
                      setTabOn(1);
                    }}
                  >
                    <b>기업 회원가입</b>
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              {/* 이메일로 */}
              {location.pathname == "/member/join_form" || tabOn == 0 ? (
                <JoinForm tabOn={tabOn} />
              ) : (
                <JoinForm tabOn={tabOn} />
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
