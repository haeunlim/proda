import React, { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ViewTop from "@components/recruitment/ViewInfoTop";
import ViewBot from "@components/recruitment/ViewInfoBot";
import ViewRight from "@components/recruitment/ViewRight";
import ViewCarousel from "@components/carousel/RecruitmentViewCarousel";
import RecruitmentList from "@components/list/RecruitmentList";
import ApplyPop from "@components/popup/ApplyPop";

const View = () => {
  const [preview, setPreview] = useState(false);
  const [sharePop, setSharePop] = useState(false);
  const code = "recruitment";
  const category = "recruitment";
  const pageType = "view";
  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <section className="view_recruitment" id="parent">
          <div className="inner flex_b_s">
            <div className="left">
              <ViewCarousel />
              <ViewTop />
              <ViewBot />
            </div>
            <ViewRight setPreview={setPreview} setSharePop={setSharePop} />
          </div>
        </section>
        <section className="more_sect">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">박두병님, 이 포지션을 찾고 계셨나요?</h3>
            </div>
            <RecruitmentList category={category} />
          </div>
        </section>
      </div>
      {preview ? (
        <ApplyPop setPreview={setPreview} setSharePop={sharePop} />
      ) : null}
      <Footer />
    </>
  );
};

export default View;
