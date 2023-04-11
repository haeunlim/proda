import styled from "styled-components";

export const UserInfoBox = styled.div`
  ${(props) => props.theme.flexSC};

  @medial ${(props) => props.theme.mobile} {
  }
`;

export const UserIco = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: solid 1px #eee;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 11px;

  @medial ${(props) => props.theme.mobile} {
  }
`;

export const UserId = styled.div`
  margin-right: 10px;
`;

export const UserInfoDate = styled.div`
  color: #999;
`;
