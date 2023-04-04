import styled, { css } from "styled-components";
export const BtnWrap = styled.div`
  margin: ${(props) => (props.mgt ? props.mgt : "40px")} auto 0;

  ${(props) =>
    props.flexCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      * + * {
        margin-left: 10px;
      }
    `}

  @media ${(props) => props.theme.mobile} {
    margin-top: ${(props) => (props.mobilemgt ? props.mobilemgt : "1.5384rem")};
  }
`;
