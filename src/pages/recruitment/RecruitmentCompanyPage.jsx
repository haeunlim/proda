import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import CompanyName from "@components/recruitment/CompanyName";
import CompanyPosition from "@components/recruitment/CompanyPosition";
import CompanyIntroduce from "@components/recruitment/CompanyIntroduce";
import ApplyPop from "@components/popup/ApplyPop";

const RecruitmentCompanyPage = () => {
  const code = "recruitment";
  const category = "recruitment";
  const pageType = "company_container";
  const companyName = "어나더베이비";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <div className="inner">
          <CompanyName text={companyName} />
          <CompanyPosition />
          <CompanyIntroduce />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentCompanyPage;
