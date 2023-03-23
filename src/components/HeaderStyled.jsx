import styled from "styled-components";
import notiIconB from "@img/ico/notif_icon_white.png";
import notiIconW from "@img/ico/notif_icon_black.png";
import searchIcon from "@img/ico/search.png";
import mypageBoxBg from "@img/sub/msg_box188x148.png";
import searchPopBtnIcon from "@img/btn/h_search21x21.png";
import hamIco from "@img/btn/ham_ico.png";

export const NotifiBtn = styled.button`
  width: 42px;
  height: 42px;
  margin-left: 20px;
  position: relative;
  background: url(${notiIconB}) no-repeat center;

  &.on::after {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: 8px;
    background: var(--bs-point);
  }
`;

export const HeaderInner = styled.div`
  max-width: 1800px;
  height: 8vw;
  max-height: 100px;
  min-height: 50px;
  z-index: 50;
`;

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  flex-shrink: 0;
  text-transform: uppercase;
  a {
    display: block;

    span {
      color: inherit;
    }
  }
`;
export const RightMenu = styled.div`
  & > * {
    font-weight: 500;
    display: ${(props) => (props.size ? "none" : "inline-block")};

    & + * {
      margin-left: 17px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    & > * {
      & + * {
        margin-left: 10px;
      }
    }
  }
`;

export const SearchBtn = styled.button`
  display: block;
  width: 42px;
  height: 42px;
  font-size: 0;
  background: var(--bs-point) url(${searchIcon}) no-repeat center;
  border-radius: 50%;
  font-size: 0;
  @media ${(props) => props.theme.mobile} {
    width: 34px;
    height: 34px;
    background-size: 19px auto;
  }
`;

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;

  &.bgWhite {
    background: #fff;
    border-bottom: 1px solid #eeeeee;
    color: #252525;
    ${HeaderInner} {
      ${Logo} {
        color: #252525;

        span {
          color: var(--bs-point);
        }
      }
      ${NotifiBtn} {
        background-image: url(${notiIconW});
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
  }
`;

export const MypageBox = styled.div`
  position: relative;
  button {
    font-weight: 500;
  }
`;

export const MypageTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% + 5px);
  right: -20px;
  width: 188px;
  height: 148px;
  background: url(${mypageBoxBg}) no-repeat center center;
  color: #252525;
  li {
    &:first-of-type a {
      color: #757575;
    }
    & + li {
      margin-top: 15px;
    }
  }
`;

export const SearchPop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.2);
`;
export const SearchPopBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 63px;
  background: transparent;
  position: relative;
  transition: all 0.3s ease 0s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color:#fff;

  &.bgWhite {
    background: #fff;
    color: #252525;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #dbdbdb;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SearchPopInner = styled.div`
  width: calc(100% - 15px);
  max-width: 980px;
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 29px;
    color: inherit;
  }
`;

export const SearchPop_searchBox = styled.div`
  display: flex;
  border-radius: 29px;
  border: solid 2px var(--bs-point);
  &.bgWhite {
    input {
      background-color: #fff;
    }
  }
  input {
    width: calc(100% - 56px);
    background-color: transparent;
    border: none;
    padding: 0 30px;
    font-size: 20px;
    border-radius: 29px;
    height: 56px;

    // &::placeholder {
    //   color: #999;
    // }
  }
  button {
    display: block;
    width: 56px;
    height: 56px;
    font-size: 0;
    background: url(${searchPopBtnIcon}) no-repeat center center/21px auto;
  }
`;
// mobile

export const HamBtn = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  z-index: 1;
  background: url(${hamIco}) no-repeat center / cover;
`;
export default HeaderStyled;
