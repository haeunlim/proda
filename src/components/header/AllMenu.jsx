import DepthOne from "@components/Nav/NavButton";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav";

const AllMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  padding-top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 111;

  &::before {
    content: "";
    background-color: #01d8df;
    width: 100%;
    height: 55px;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const AllMenuTop = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #dbdbdb;

  a {
    width: 90px;
    line-height: 31px;
    display: block;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    color: #252525;
    border: solid 1px #999999;

    & + a {
      margin-left: 9px;
      border-color: #01d8df;
      color: #01d8df;
    }
  }
`;

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

export default function AllMenu() {
  return (
    <AllMenuWrap>
      <AllMenuTop>
        <Link to="../login/login.php">로그인</Link>
        <Link to="../member/join_us.php">회원가입</Link>
      </AllMenuTop>
      <Nav>
        <ul>
          <Nav.Item active={isActive("/about")}>
            <Nav.Btn> 프로다 소개</Nav.Btn>
            <Nav.List expanded={isActive("/about")}>
              <Nav.Link to="/about/html">프로다소개1</Nav.Link>
              <Nav.Link to="/about/css">프로다소개2</Nav.Link>
            </Nav.List>
          </Nav.Item>
          <Nav.Item active={isActive("/about")}>
            <Nav.Btn> 프로채용</Nav.Btn>
            <Nav.List expanded={isActive("/about")}>
              <Nav.Link to="/about/html">프로채용</Nav.Link>
              <Nav.Link to="/about/css">프로채용2</Nav.Link>
            </Nav.List>
          </Nav.Item>
          <Nav.Item active={isActive("/about")}>
            <Nav.Btn> 프로검색</Nav.Btn>
            <Nav.List expanded={isActive("/about")}>
              <Nav.Link to="/about/html">프로검색1</Nav.Link>
              <Nav.Link to="/about/css">프로검색2</Nav.Link>
            </Nav.List>
          </Nav.Item>
          <Nav.Item active={isActive("/about")}>
            <Nav.Btn> 프로아카데미</Nav.Btn>
            <Nav.List expanded={isActive("/about")}>
              <Nav.Link to="/about/html">프로아카데미1</Nav.Link>
              <Nav.Link to="/about/css">프로아카데미2</Nav.Link>
            </Nav.List>
          </Nav.Item>
        </ul>
      </Nav>

      {/* <Nav>
        <NavList>
          <li>
            <button
              type="button"
              className="depth01"
              active={isActive("/about")}
            >
              프로다소개
            </button>
            <Depth2 expanded={isActive("/about")}>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  프로다소개1
                </Link>
              </li>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  프로다소개2
                </Link>
              </li>
            </Depth2>
          </li>
          <li>
            <button
              type="button"
              className="depth01"
              active={isActive("/about")}
            >
              프로채용
            </button>
            <Depth2 expanded={isActive("/front")}>
              <li>
                <a href="../employ/employ_list.php">프로채용</a>
              </li>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  프로채용2
                </Link>
              </li>
            </Depth2>
          </li>
          <li>
            <button
              type="button"
              className="depth01"
              active={isActive("/about")}
            >
              프로검색
            </button>
            <Depth2 expanded={isActive("/front")}>
              <li>
                <a href="../search/search_list.php">프로검색</a>
              </li>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  프로검색2
                </Link>
              </li>
            </Depth2>
          </li>
          <li>
            <button
              type="button"
              className="depth01"
              active={isActive("/about")}
            >
              프로아카데미
            </button>
            <Depth2 expanded={isActive("/front")}>
              <li>
                <a href="../academy/academy_list.php">세미나</a>
              </li>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  취업꿀팁
                </Link>
              </li>
              <li>
                <a href="../academy/academy_daily.php">일상</a>
              </li>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  공지사항
                </Link>
              </li>
              <li>
                <Link to="#!" active={isActive("/front/html")}>
                  취업고민
                </Link>
              </li>
            </Depth2>
          </li>
        </NavList>
      </Nav> */}
    </AllMenuWrap>
  );
}
