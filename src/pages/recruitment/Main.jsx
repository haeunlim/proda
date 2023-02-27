import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruimentCarousel from "@components/carousel/RecruitmentCarousel";
import ListSorting from "@components/list/ListSorting";
import RecruitmentList from "@components/list/RecruitmentList";

const RecruitmentPage = () => {
  const code = "recruitment";
  const category = "recruitment";
  const pageType = "sub_main";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <section className="recruiment_slide item_type02">
          <div className="inner">
            <div className="sub_ttl_row">
              <h2 className="sect_ttl2 big tac">
                채용에 적극적으로 임하는 <br className="only_mo" />
                회사들을 모아봤어요.
              </h2>
            </div>
            <RecruimentCarousel />
          </div>
        </section>
        <section className="recruitment_list">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">프로채용 기업</h3>
            </div>

            <div className="item_list_wrap">
              <ListSorting category={category} />
              <RecruitmentList category={category} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentPage;
