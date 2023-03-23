import React from "react";
import { Link } from "react-router-dom";
import BtnWrap from "@components/buttons/BtnWrap";
import InputGroup, { InputWrap } from "./InputGroup";

const LoginForm = (props) => {
  return (
    <div className="login_wrap">
      <InputGroup>
        <InputWrap>
          <input
            type="email"
            id={`email_${props.tabOn}`}
            placeholder="이메일을 입력해주세요."
          />
          <input
            type="password"
            id={`pw_${props.tabOn}`}
            placeholder="비밀번호를 입력해주세요."
          />
          <div className="check_point">
            <div className="chk_box">
              <input
                type="checkbox"
                id={`save_id${props.tabOn}`}
                name={`save_id${props.tabOn}`}
                value="Y"
              />
              <label htmlFor={`save_id${props.tabOn}`}>로그인 상태 유지</label>
            </div>
            <ul className="login_help_row">
              <li>
                <Link to="/member/find_account">
                  이메일<span>/</span>비밀번호 찾기
                </Link>
              </li>
              <li>
                <Link to="/member/join">
                  <b>회원가입</b>
                </Link>
              </li>
            </ul>
          </div>
        </InputWrap>
      </InputGroup>
      <BtnWrap>
        <Link
          to={"/main/main"}
          className="btn btn-shadow bg-point rounded-2"
          id="login"
        >
          로그인
        </Link>
      </BtnWrap>
      {props.tabOn == 0 ? <SnsLogin /> : ""}
    </div>
  );

  // 개인회원만
  function SnsLogin() {
    return (
      <div className="sns_login">
        <p className="login_ttl">SNS로그인</p>

        <div className="sns_btn_wrap">
          <button type="button" className="naver_login">
            네이버 로그인
          </button>
          <button type="button" className="kakao_login">
            카카오 로그인
          </button>
        </div>
      </div>
    );
  }
};

export default LoginForm;
