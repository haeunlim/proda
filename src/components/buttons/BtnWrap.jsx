import styled, { css } from "styled-components";
export const BtnWrap = styled.div`
  margin: 40px auto 0;

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
`;
