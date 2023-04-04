import React, { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LoginForm from "@components/form/LoginForm";
import MemberTab from "@components/tab/MemberTab";
import {
  MemberTtl,
  MemberTtlBot,
  MemberTtlBox,
} from "@components/ttl/titleStyled";

const LoginPage = () => {
  const [tabOn, setTabOn] = useState(0);
  const tabName = ["개인회원", "기업회원"];
  const code = "member";
  const category = "login";
  const title = "로그인";
  const text = "너도 프로, 나도 프로, 우리는 프로다!";
  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${category}`}>
        <div className="inner">
          <MemberTtlBox>
            <MemberTtl big>{title}</MemberTtl>
            <MemberTtlBot>{text}</MemberTtlBot>
          </MemberTtlBox>
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
