import React, { useState } from "react";
import Meta from "@components/Meta";
import { Mobile, Pc } from "./Responsive";
import { Link, useLocation } from "react-router-dom";
import HeaderStyled, {
  NotifiBtn,
  SearchPop,
  SearchPopBody,
  SearchPopInner,
  SearchPop_searchBox,
  SearchBtn,
  HeaderInner,
  MypageBox,
  MypageTab,
  RightMenu,
  Logo,
  HamBtn,
} from "./HeaderStyled";
import Gnb from "./header/Gnb";
import AllMenu from "./header/AllMenu";

const Header = () => {
  const location = useLocation();
  // 마이페이지 hide메뉴
  const [allMenuOn, setAllMenuOn] = useState();
  const [mypageTabShow, setMypageTabShow] = useState();
  const [bgChange, setBgChange] = useState();
  const [searchOn, setSearchOn] = useState();
  // 로그인됐을때
  const [login, setLogin] = useState(true);

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
  return (
    <>
      <Meta />
      <HeaderStyled
        id="header"
        className={`${location.pathname.includes("/main") ? "" : "bgWhite"} ${
          bgChange ? "bgWhite" : ""
        }`}
      >
        <HeaderInner className="inner flex_b_c">
          <Logo>
            <Link to="/">
              <span>p</span> 프로다
            </Link>
          </Logo>
          <Mobile>
            <RightMenu className="flex__c">
              <SearchBtn onClick={() => setSearchOn(!searchOn)}></SearchBtn>
              <HamBtn onClick={() => setAllMenuOn(1)}></HamBtn>
            </RightMenu>
          </Mobile>
          <Pc>
            <nav className="gnb">
              <Gnb />
            </nav>
            <RightMenu className="flex__c">
              {login ? (
                <>
                  <button type="button" onClick={() => setLogin(false)}>
                    로그아웃
                  </button>
                  <MypageBox>
                    <button
                      type="button"
                      className="mypage"
                      onClick={() => setMypageTabShow(!mypageTabShow)}
                    >
                      마이페이지
                    </button>
                    {mypageTabShow && (
                      <MypageTab>
                        <ul>
                          <li>
                            <Link to="" onClick={() => setMypageTabShow()}>
                              마이프로 정보
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={() => setMypageTabShow()}>
                              스크랩
                            </Link>
                          </li>
                        </ul>
                      </MypageTab>
                    )}
                  </MypageBox>
                  <NotifiBtn className="on"></NotifiBtn>
                </>
              ) : (
                <>
                  <Link to="/login/login">로그인</Link>
                  <Link to="/member/join">회원가입</Link>
                </>
              )}
              <SearchBtn onClick={() => setSearchOn(!searchOn)}></SearchBtn>
            </RightMenu>
          </Pc>
        </HeaderInner>
      </HeaderStyled>
      {searchOn && (
        <SearchPop>
          <SearchPopBody
            className={`${
              location.pathname.includes("/main") ? "" : "bgWhite"
            } ${bgChange ? "bgWhite" : ""}`}
          >
            <SearchPopInner>
              <h3>회사 및 포지션을 검색해보세요</h3>
              <SearchPop_searchBox>
                <input type="text" placeholder="검색해주세요." />
                <button type="button" className="h_search_btn">
                  검색
                </button>
              </SearchPop_searchBox>
            </SearchPopInner>
          </SearchPopBody>
        </SearchPop>
      )}
      {allMenuOn && <AllMenu />}
    </>
  );
};

export default Header;
