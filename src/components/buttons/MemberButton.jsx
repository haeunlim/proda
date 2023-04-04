import styled from "styled-components";
import { BtnBig } from "./Buttons";
import NaverIco from "@img/ico/join_naver.png";
import KakaoIco from "@img/ico/join_kakao.png";
import EmailIco from "@img/ico/join_email.png";
export const HowJoinBtn = styled.div`
  * + * {
    margin-top: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    * + * {
      margin-top: 15px;
    }
  }
`;

export const JoinHowBtn = styled(BtnBig)`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  height: 60px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-weight: 500;
  background: #fff url(${EmailIco}) no-repeat left 20px center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.1538rem;
    height: 3.4615rem;
    background-size: 1.7307rem auto;
    background-position: left 1.1538rem center;
  }
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
  @media ${(props) => props.theme.mobile} {
    box-shadow: 0 0.3846rem 0.6923rem rgba(1, 216, 223, 0.25);
    border-radius: 1.538rem;
  }
`;
