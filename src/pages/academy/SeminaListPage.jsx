import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import ChoiceCarousel from "@components/carousel/ChoiceCarousel";
import SeminaList from "@components/list/SeminaList";
import ListSorting from "@components/list/ListSorting";

const SeminaListPage = () => {
  const code = "academy";
  const category = "semina";
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
            <h3 className="sect_ttl big">세미나</h3>
            <ListSorting category={category} />
            <SeminaList />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SeminaListPage;
