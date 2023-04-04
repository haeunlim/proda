import React, { useState } from "react";
import InputEmailGroup, { InputPhone } from "./Inputs";
import InputGroup, { InputWrap, InputRow } from "./InputGroup";
import { Button } from "@components/buttons/Buttons";

export default function FindForm(props) {
  return (
    <div className="login_wrap">
      {props.tabOn == 0 ? FindEmail() : FindPW()}
    </div>
  );

  // 이메일 찾기
  function FindEmail() {
    return (
      <>
        <InputGroup>
          <InputWrap>
            <input type="text" placeholder="이름을 입력해주세요" />
            <InputPhone />
            <Button lineBlack>인증번호 전송</Button>
            <Button bgPoint>이메일 확인</Button>
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <InputWrap>
            <label htmlFor="cfm_email">확인된 이메일</label>
            <input type="text" id="cfm_email" disabled />
          </InputWrap>
        </InputGroup>
      </>
    );
  }
  function FindPW() {
    const [phone, setPhone] = useState(1);

    const handleChange = () => {
      setPhone(!phone);
    };

    return (
      <>
        <div className="find_txt">
          <p>본인인증 받으신 정보를 입력해 주세요.</p>
          <p>
            휴대폰 번호 or 아이디(이메일 주소)로 임시 패스워드를 보내드립니다.
          </p>
        </div>
        <InputGroup>
          <InputWrap>
            <InputRow radioRow>
              <div className="radio_box">
                <input
                  type="radio"
                  id="get_phone"
                  name="find_pw"
                  onChange={handleChange}
                  defaultChecked
                />
                <label htmlFor="get_phone">휴대폰으로 받기</label>
              </div>
              <div className="radio_box">
                <input
                  type="radio"
                  id="get_email"
                  name="find_pw"
                  onChange={handleChange}
                />
                <label htmlFor="get_email">이메일로 받기</label>
              </div>
            </InputRow>
            <InputRow>
              <input type="text" placeholder="이름을 입력해주세요." />
            </InputRow>
            {phone ? (
              <InputPhone num="_find1" />
            ) : (
              <InputEmailGroup num="_find2" holder="이메일" />
            )}
            <Button lineBlack>인증번호 전송</Button>
            <Button bgPoint>비밀번호 찾기</Button>
          </InputWrap>
        </InputGroup>
      </>
    );
  }
}
