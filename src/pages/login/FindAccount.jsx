import React, { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MemberTtl from "@components/ttl/MemberTtl";
import MemberTab from "@components/tab/MemberTab";
import FindForm from "@components/form/FindForm";

const FindAccount = () => {
  const [tabOn, setTabOn] = useState(0);
  const tabName = ["이메일 찾기", "비밀번호 찾기"];
  const code = "member";
  const category = "find_account";
  const ttl = "이메일/비밀번호 찾기";
  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${category}`}>
        <div className="inner">
          <MemberTtl ttl={ttl} />
          <MemberTab
            tabOn={tabOn}
            categeory={category}
            setTabOn={setTabOn}
            tabName={tabName}
          />
          <FindForm tabOn={tabOn} categeory={category} />
          <div className=" login_wrap"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindAccount;
