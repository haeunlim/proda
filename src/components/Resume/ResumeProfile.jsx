import React from "react";
import profileImg from "@img/sub/profile_120x120.jpg";

export default function ResumeProfile() {
  return (
    <div className="sv_vtop">
      <div className="top">
        <div className="left">
          <div
            className="profile_box"
            style={{ backgroundImage: `url${profileImg}` }}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ul className="bot">
        <li>
          <p>학력</p>
          <button type="button" className="check">
            확인하기
          </button>
        </li>
        <li>
          <p>경력</p>
          <button type="button" className="check">
            확인하기
          </button>
        </li>
        <li>
          <p>수상내역</p>
          <p className="subject">엠케이퍼블리싱 외 2건</p>
        </li>
      </ul>
    </div>
  );
}
