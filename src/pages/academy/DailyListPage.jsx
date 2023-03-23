import React from "react";

import { Link } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import ChoiceCarousel from "@components/carousel/ChoiceCarousel";
import DailyList from "@components/list/DailyList";
import DailyListTop from "@components/write/DailyListTop";

const DailyListPage = () => {
  const code = "academy";
  const category = "daily";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${category}`}>
        <div className="inner">
          <Tab code={code} />
        </div>
        <section className="choice_sect">
          <div className="inner">
            <ChoiceCarousel />
          </div>
        </section>
        <section className="list_sect">
          <div className="inner">
            <h3 className="sect_ttl big">일상</h3>
            <DailyListTop />
            <DailyList />
          </div>
          <div className="link_write_wrap active">
            <Link to="/academy/daily_write" className="link_write"></Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DailyListPage;
