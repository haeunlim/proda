import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ReturnBtn from "@components/buttons/ReturnBtn";
import { DailyWriteBtn } from "@components/buttons/WriteBtn";

const DailyWritePage = () => {
  const code = "academy";
  // const pageType = "write";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code}`}>
        <section className="write_sect">
          <div className="inner">
            <div className="write_row half">
              <select name="" id="">
                <option value="">게시판을 선택해주세요</option>
              </select>
            </div>
            <div className="write_box">
              <div className="title">
                <input type="text" placeholder="제목을 입력해주세요." />
              </div>
              <div className="cont">
                <textarea
                  name=""
                  id=""
                  placeholder="내용을 입력해주세요."
                ></textarea>
              </div>
              <div className="photo_count">
                <div className="count_wrap">
                  <div className="ico"></div>
                  <p className="count_number">
                    ( <span>0/1</span> )
                  </p>
                </div>
              </div>
            </div>
            <div className="btn_wrap flex_c_c">
              <ReturnBtn rounded maxWidth="247px">
                뒤로가기
              </ReturnBtn>
              <DailyWriteBtn onClick={onClick} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DailyWritePage;
