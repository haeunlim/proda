import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruimentCarousel from "@components/carousel/RecruitmentCarousel";
import RecruitmentList from "@components/list/RecruitmentList";
import { ContainerTtl, ContainerTtlBox } from "@components/ttl/titleStyled";

const RecruitmentMainPage = () => {
  const code = "recruitment";
  const category = "recruitment";
  const pageType = "sub_main";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <section className="recruiment_carousel_sect">
          <div className="inner">
            <ContainerTtlBox tac>
              <ContainerTtl>
                채용에 적극적으로 임하는 <br className="only_mo" />
                회사들을 모아봤어요.
              </ContainerTtl>
            </ContainerTtlBox>
            <RecruimentCarousel />
          </div>
        </section>
        <section className="recruitment_list">
          <div className="inner">
            <RecruitmentList category={category} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentMainPage;
