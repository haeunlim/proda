import BookMarkBtn from "@components/buttons/BookMarkBtn";
import React from "react";

export default function CompanyPosition() {
  return (
    <section className="position_sect">
      <div className="sect_ttl_box">
        <h3 className="sect_ttl">채용 중인 포지션</h3>
      </div>
      <ul className="flex col_3">
        <li>
          <div className="text_box">
            <a href="#" className="subject">
              어나더베이비에서 가족같은 애견미용사 를 모시려 합니다
            </a>
            <p className="date">2022.01.12까지</p>
          </div>
          <BookMarkBtn />
        </li>
        <li>
          <div className="text_box">
            <a href="#" className="subject">
              어나더베이비에서 가족같은 애견미용사 를 모시려 합니다
            </a>
            <p className="date">상시채용</p>
          </div>
          <BookMarkBtn />
        </li>
        <li>
          <div className="text_box">
            <a href="#" className="subject">
              애견미용실 사무장님 구합니다.
            </a>
            <p className="date">2022.01.12까지</p>
          </div>
          <BookMarkBtn />
        </li>
        <li>
          <div className="text_box">
            <a href="#" className="subject">
              어나더베이비에서 가족같은 애견미용사 를 모시려 합니다
            </a>
            <p className="date">2022.01.12까지</p>
          </div>
          <BookMarkBtn />
        </li>
        <li>
          <div className="text_box">
            <a href="#" className="subject">
              어나더베이비에서 가족같은 애견미용사 를 모시려 합니다
            </a>
            <p className="date">2022.01.12까지</p>
          </div>
          <BookMarkBtn />
        </li>
      </ul>
      <div className="btn_wrap flex_c_c">
        <button type="button" className="btn moreBtn">
          더 많은 포지션 보기 +
        </button>
      </div>
    </section>
  );
}
