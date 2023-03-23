import React from "react";
import profileImgBig from "@img/sub/profile_120x120.jpg";

export default function ResumeProfile({ login }) {
  return (
    <article className="sv_vtop">
      <div className="top">
        <div className="left">
          <div
            className="profile_box"
            style={{ backgroundImage: `url(${profileImgBig})` }}
          ></div>
          <button type="button" className="check">
            사진보기
          </button>
        </div>
        <div className="right">
          <div className="info_top">
            <span className="name">김 O O</span>
            <span className="age">27세 </span>
          </div>
          <div className="info_bot">
            <table className="tbst03">
              <colgroup>
                <col width="80px" />
                <col width="auto" />
                <col width="80px" />
                <col width="auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>휴대폰</th>
                  <td>
                    <button type="button" className="check">
                      확인하기
                    </button>
                  </td>
                  <th>Email</th>
                  <td>
                    <button type="button" className="check">
                      확인하기
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td colspan="3">
                    <button type="button" className="check">
                      확인하기
                    </button>
                  </td>
                </tr>
                {login ? (
                  <tr>
                    <th>주소</th>
                    <td colspan="3">
                      서울 송파구
                      <button type="button" class="check">
                        확인하기
                      </button>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ul className="bot">
        <li>
          <p>학력</p>
          {login ? (
            <>
              <p class="subject">이화여자대학교</p>
              <p class="blue">대학교(4년)</p>
            </>
          ) : (
            <button type="button" className="check">
              확인하기
            </button>
          )}
        </li>
        <li>
          <p>경력</p>
          {login ? (
            <>
              <p class="subject">○○○○○○○</p>
              <p class="blue">1년 ~ 3년</p>
            </>
          ) : (
            <button type="button" className="check">
              확인하기
            </button>
          )}
        </li>
        <li>
          <p>수상내역</p>
          <p className="subject">엠케이퍼블리싱 외 2건</p>
          {login ? (
            <>
              <p>대학교(4년)</p>
            </>
          ) : (
            ""
          )}
        </li>
      </ul>
    </article>
  );
}
