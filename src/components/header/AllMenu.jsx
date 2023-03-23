import React from "react";
import styled from "styled-components";
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
const AllMenuStyled = styled.nav`
  flex: 1;
  max-height: calc(100% - 50px);
  overflow-y: auto;

  li {
    border-bottom: 1px solid #eee;
  }
`;
export default function AllMenu() {
  return (
    <AllMenuWrap>
      <AllMenuTop>
        <a href="../login/login.php">로그인</a>
        <a href="../member/join_us.php">회원가입</a>
      </AllMenuTop>
      <AllMenuStyled>
        <ul>
          <li>
            <button type="button" className="depth01">
              프로다소개
            </button>
            <ul className="submenu_list">
              <li>
                <a href="#">프로다소개1</a>
              </li>
              <li>
                <a href="#">프로다소개2</a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="depth01">
              프로채용
            </button>
            <ul className="submenu_list">
              <li>
                <a href="../employ/employ_list.php">프로채용</a>
              </li>
              <li>
                <a href="#">프로채용2</a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="depth01">
              프로검색
            </button>
            <ul className="submenu_list">
              <li>
                <a href="../search/search_list.php">프로검색</a>
              </li>
              <li>
                <a href="#">프로검색2</a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="depth01">
              프로아카데미
            </button>
            <ul className="submenu_list">
              <li>
                <a href="../academy/academy_list.php">세미나</a>
              </li>
              <li>
                <a href="#">취업꿀팁</a>
              </li>
              <li>
                <a href="../academy/academy_daily.php">일상</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">취업고민</a>
              </li>
            </ul>
          </li>
        </ul>
      </AllMenuStyled>
    </AllMenuWrap>
  );
}
