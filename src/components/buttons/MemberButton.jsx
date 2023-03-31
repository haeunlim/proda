import styled from "styled-components";
import { BtnBig } from "./Buttons";
import NaverIco from "@img/ico/join_naver.png";
import KakaoIco from "@img/ico/join_kakao.png";
import EmailIco from "@img/ico/join_email.png";

export const JoinHowBtn = styled(BtnBig)`
  font-weight: 600;
  background: #fff url(${EmailIco}) no-repeat left 20px center;
`;
export const JoinNaverBtn = styled(JoinHowBtn)`
  color: var(--bs-naver-text);
  background-color: var(--bs-naver-bg);
  border-color: var(--bs-naver-bg);
  background-image: url(${NaverIco});
`;
export const JoinKakaoBtn = styled(JoinHowBtn)`
  background-color: var(--bs-kakao-bg);
  color: var(--bs-kakao-text);
  border-color: var(--bs-kakao-bg);
  background-image: url(${KakaoIco});
`;
export const LoginBtnStyled = styled(BtnBig)`
  box-shadow: 0 0.6875rem 1.2rem rgba(1, 216, 223, 0.25);
  border-radius: 21px;
`;
