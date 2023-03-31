import styled, { css } from "styled-components";

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 1.125rem;
  height: ${(props) => (props.lack ? "48px" : "50px")};
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-weight: ${(props) => (props.bold ? "600" : "500")};
  ${(props) =>
    props.bgPoint &&
    css`
      background-color: var(--bs-point);
      color: #fff;
      border-color: var(--bs-point);
    `}
  ${(props) =>
    props.bgBlue &&
    css`
      background-color: var(--bs-blue3);
      color: #fff;
      border-color: var(--bs-blue3);
    `}
  ${(props) =>
    props.bgBlack &&
    css`
      background-color: #252525;
      color: #fff;
      border-color: #252525;
    `}
    ${(props) =>
    props.lineBlack &&
    css`
      border-color: #252525;
    `};
  ${(props) =>
    props.linkLight &&
    css`
      border-color: #eee;
    `}
`;
export const BtnSmall = styled(Button)`
  font-size: 0.9375rem;
  height: 31px;

  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
    height: 2.3076rem;
  }
`;
export const BtnMedium = styled(BtnSmall)`
  height: 42px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    height: ${(props) => (props.lack ? "2.6923rem" : "3.0769rem")};
  }
`;

export const BtnBig = styled(Button)`
  font-size: ${(props) => (props.lack ? "1.125rem" : "1.25rem")};
  height: ${(props) => (props.lack ? "58px" : "60px")};
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    height: 3.077rem;
  }
`;
export const BtnBig2 = styled(BtnBig)`
  height: 62px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    height: 3.077rem;
  }
`;
