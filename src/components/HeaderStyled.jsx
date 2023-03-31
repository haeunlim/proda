import styled from "styled-components";
import hamIco from "@img/btn/ham_ico.png";
import hamIcoB from "@img/btn/ham_ico_b.png";
import hamIcoOn from "@img/btn/ham_on_ico.png";
import { NotifiBtn } from "./header/NotificationBtn";

import notiIconB from "@img/ico/notif_icon_black.png";
import { HamBtnStyled } from "./header/UtillMenu";

export const HeaderInner = styled.div`
  max-width: 1800px;
  height: 100px;
  min-height: 50px;
  z-index: 50;
  @media ${(props) => props.theme.mobile} {
    height: 50px;
    width: 100%;
    padding-left: 15px;
    position: relative;
    z-index: 9999999;
  }
`;

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: inherit;
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

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  ${HamBtnStyled} {
    background-image: url(${(props) => (props.allMenuOn ? hamIcoOn : hamIco)});
  }

  @media ${(props) => props.theme.mobile} {
  }
`;

export const HeaderWhite = styled(HeaderStyled)`
  background: #fff;
  border-bottom: 1px solid #eeeeee;
  color: ${(props) => (props.allMenuOn ? "#fff" : "#252525")};
  ${HeaderInner} {
    ${Logo} {
      span {
        color: ${(props) => (props.allMenuOn ? "#fff" : "var(--bs-point)")};
      }
    }
    ${NotifiBtn} {
      background-image: url(${notiIconB});
    }
    ${HamBtnStyled} {
      background-image: url(${(props) =>
        props.allMenuOn ? hamIcoOn : props.bgChange ? hamIco : hamIcoB});
    }
  }

  @media ${(props) => props.theme.mobile} {
  }
`;
export default HeaderStyled;
