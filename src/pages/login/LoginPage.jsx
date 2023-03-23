import React, { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MemberTtl from "@components/ttl/MemberTtl";
import LoginForm from "@components/form/LoginForm";
import MemberTab from "@components/tab/MemberTab";

const LoginPage = () => {
  const [tabOn, setTabOn] = useState(0);
  const tabName = ["개인회원", "기업회원"];
  const code = "member";
  const category = "login";
  const ttl = "로그인";
  const ttlText = "너도 프로, 나도 프로, 우리는 프로다!";
  return (
    <>
      <Header />

      <div id="container" className={`sub ${code} ${category}`}>
        <div className="inner">
          <MemberTtl ttl={ttl} ttlText={ttlText} />

          <MemberTab
            tabOn={tabOn}
            category={category}
            setTabOn={setTabOn}
            tabName={tabName}
          />
          <LoginForm tabOn={tabOn} category={category} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
