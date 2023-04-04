import React, { useState, useEffect } from "react";
import Meta from "@components/Meta";
import { Mobile, Pc } from "./Responsive";
import { Link, useLocation } from "react-router-dom";
import HeaderStyled, {
  HeaderWhite,
  HeaderInner,
  RightMenu,
  Logo,
} from "./HeaderStyled";
import SearchPop from "./header/SearchPop";
import AllMenu from "./header/AllMenu";
import Gnb from "./header/Gnb";
import UtillMenu, { HamBtn } from "./header/UtillMenu";
import { SearchBtn } from "./header/SearchBtn";

const HeaderElement = ({ children, bgChange, allMenuOn, searchOn }) => {
  return (
    <>
      {bgChange || searchOn || location.pathname !== "/main" ? (
        <HeaderWhite id="header" allMenuOn={allMenuOn} searchOn={searchOn}>
          {children}
        </HeaderWhite>
      ) : (
        <HeaderStyled id="header" allMenuOn={allMenuOn}>
          {children}
        </HeaderStyled>
      )}
    </>
  );
};

const Header = () => {
  const location = useLocation();
  const [resetNum, setResetNum] = useState();

  // 로그인됐을때
  const [login, setLogin] = useState(true);
  const [allMenuOn, setAllMenuOn] = useState();
  const [bgChange, setBgChange] = useState();
  const [searchOn, setSearchOn] = useState();

  if (allMenuOn) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  window.onscroll = function () {
    if (location.pathname == "/main") {
      HeaderActive();
    }
  };
  function HeaderActive() {
    if (window.pageYOffset > 0) {
      setBgChange(true);
    } else {
      setBgChange(false);
    }
  }
  const parentClose = (state) => {
    setAllMenuOn(state);
  };

  return (
    <>
      <Meta />
      <HeaderElement
        bgChange={bgChange}
        searchOn={searchOn}
        allMenuOn={allMenuOn}
      >
        <HeaderInner className="inner flex_b_c">
          <Logo>
            <Link to="/">
              <span>p</span> 프로다
            </Link>
          </Logo>
          <Pc>
            <nav className="gnb">
              <Gnb />
            </nav>
          </Pc>
          <RightMenu className="flex__c">
            {!allMenuOn && (
              <>
                <UtillMenu
                  login={login}
                  logoutOnClick={() => setLogin(false)}
                />

                <SearchBtn
                  onClick={() => setSearchOn(!searchOn)}
                  active={searchOn}
                />
              </>
            )}
            <Mobile>
              <HamBtn
                onClick={() => {
                  setAllMenuOn(!allMenuOn);
                  setResetNum(null);
                }}
              />
            </Mobile>
          </RightMenu>
        </HeaderInner>
        <Mobile>
          {allMenuOn && (
            <AllMenu
              allMenuOn={allMenuOn}
              login={login}
              resetNum={resetNum}
              parentClose={parentClose}
              logoutOnClick={() => setLogin(false)}
            />
          )}
        </Mobile>
      </HeaderElement>
      {searchOn && <SearchPop bgChange={bgChange} />}
    </>
  );
};

export default Header;
