import React, { useState, useRef } from "react";
import { Checkbox } from "./Inputs";
import styled from "styled-components";

const MoreBtn = styled.button`
  display: inline-block;
  font-size: 13px;
  color: ${(props) => (props.gray ? `#999` : `#0a62c2`)};

  @media ${(props) => props.theme.mobile} {
    font-size: 0.846rem;
  }
`;

export default function AgreeList() {
  const agreeWrapRef = useRef();
  const essential = <span>[필수]</span>;
  const data = [
    { id: 0, title: "이용약관 동의", essential },
    { id: 1, title: "개인정보 수집 및 이용동의", essential },
    { id: 2, title: "문사 서비스 이용약관 동의", essential },
  ];
  const handleAllCheck = (e) => {
    agreeWrapRef.current
      .querySelectorAll("input[name='agree']")
      .forEach((itm) => {
        itm.checked = e.target.checked;
      });
  };

  const handleAllCheckInput = (e) => {
    let allChk = 0;
    agreeWrapRef.current
      .querySelectorAll("input[name='agree']")
      .forEach((itm) => {
        if (itm.checked == false) {
          document.querySelector("#allCheck").checked = false;
          allChk++;
        }
      });
    if (!allChk) {
      document.querySelector("#allCheck").checked = true;
    }
  };
  return (
    <div className="agree_wrap" ref={agreeWrapRef}>
      <div className="all_check">
        <Checkbox id="allCheck" name="allCheck" onChange={handleAllCheck}>
          모든 약관에 동의합니다.
        </Checkbox>
      </div>
      <ul className="agree_list">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Checkbox
                id={`agree0${index}`}
                name="agree"
                defaultValue={index}
                onClick={handleAllCheckInput}
              >
                {item.essential ? essential : ""}
                {item.title}
              </Checkbox>
              <MoreBtn type="button">자세히보기</MoreBtn>
            </li>
          );
        })}
      </ul>
      <div className="ad_agree">
        <Checkbox id="agree04" name="agree">
          광고성 정보 수신 동의
        </Checkbox>
        <MoreBtn type="button" gray>
          자세히보기
        </MoreBtn>
      </div>
    </div>
  );
}
