import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import BtnWrap from "@components/buttons/BtnWrap";
import InputEmailGroup, { InputAddressGroup, InputPhone } from "./Inputs";
import InputGroup, { InputRow, InputWrap } from "./InputGroup";
import Btn from "@components/buttons/Btn";
import ContTtl from "@components/ttl/ContTtl";
import styled from "styled-components";
import AgreeList from "./AgreeList";

const Error = styled.p`
  color: #ee0505;
`;
const Success = styled.p`
  color: #0a62c2;
`;

const JoinForm = ({ tabOn }) => {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCfmError, setPasswordCfmError] = useState(true);
  const handlePasswordChange = (e) => {
    const passwordFormat =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
    const isPasswordValid = passwordFormat.test(e.target.value);
    setPasswordError(!isPasswordValid);
  };
  const handlePasswordCfm = (e) => {
    console.log(document.querySelector('input[id="pw1"]').value);
    console.log(e.target.value);
    e.target.value !== document.querySelector('input[id="pw1"]').value
      ? setPasswordCfmError(true)
      : setPasswordCfmError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}></form>
      <InputGroup>
        <ContTtl>기본 정보 입력</ContTtl>
        <InputWrap>
          <label htmlFor="">이메일*</label>
          <InputEmailGroup num={tabOn} holder="이메일을 입력해주세요." />
          <Btn text="중복체크" btnName="middle line_black" />
        </InputWrap>
        <InputWrap>
          <label htmlFor="">이름*</label>
          <input type="text" />
        </InputWrap>
        <InputWrap>
          <label htmlFor="">비밀번호 입력*</label>
          <input
            type="password"
            id="pw1"
            error={passwordError}
            onChange={handlePasswordChange}
          />
          <div className="msg_box">
            <p>8 ~ 20자의 영문 대/소문자, 숫자, 특수문자를 사용하세요.</p>
            {passwordError ? (
              <Error>
                비밀번호는 8~20자의 영문 대/소문자, 숫자, 특수문자 등 3종류
                이상으로 조합해주세요.
              </Error>
            ) : (
              <Success>사용 가능한 비밀번호입니다.</Success>
            )}
          </div>
        </InputWrap>
        <InputWrap>
          <label htmlFor="">비밀번호 확인*</label>
          <input
            type="password"
            id="pw2"
            error={passwordCfmError}
            onChange={handlePasswordCfm}
          />
          <div className="msg_box">
            <p>필수 입력 정보입니다</p>
            {passwordCfmError ? (
              <Error>비밀번호가 일치하지 않습니다.</Error>
            ) : (
              ""
            )}
          </div>
        </InputWrap>
        <InputWrap>
          <label htmlFor="">휴대폰 번호*</label>
          <InputPhone />
          <Btn text="인증번호 전송" btnName="middle line_black" />
        </InputWrap>
      </InputGroup>
      {tabOn == 1 ? <Corporation /> : ""}
      <InputGroup>
        <ContTtl>약관동의</ContTtl>
        <AgreeList />
      </InputGroup>

      <BtnWrap>
        <Link to={"/main/main"} className="btn middle bg-point" id="login">
          회원가입 완료
        </Link>
      </BtnWrap>
    </>
  );
};

// 기업회원 회원가입일때만 나옵니다
function Corporation() {
  const fileRef = React.useRef(null);
  const handleButtonClick = (e) => {
    fileRef.current.click();
  };
  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <>
      <InputGroup>
        <ContTtl>회사 정보 입력</ContTtl>
        <InputWrap>
          <label htmlFor="">회사명*</label>
          <input type="text" />
        </InputWrap>
        <InputWrap>
          <label htmlFor="">회사주소*</label>
          <InputAddressGroup />
        </InputWrap>
        <InputWrap>
          <label htmlFor="">사업자등록번호*</label>
          <input type="text" />
        </InputWrap>
        <InputWrap>
          <label htmlFor="">사업분야*</label>
          <select name="" id="">
            <option value=""></option>
          </select>
        </InputWrap>
        <InputWrap>
          <label htmlFor="">사업자등록증 첨부*</label>
          <InputRow asideBtn>
            <input type="file" ref={fileRef} onChange={handleChange} />
            <Btn
              text="첨부하기"
              onClick={handleButtonClick}
              btnName="line_black"
            />
          </InputRow>
          <ul className="upload_wrap">
            <li>
              <a href="#!">프로다_사업자등록증_사본.jpg</a>
              <button type="button"></button>
            </li>
          </ul>
        </InputWrap>
      </InputGroup>
    </>
  );
}

export default JoinForm;
