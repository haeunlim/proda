import React from "react";

import Header from "@components/Header";
import SearchForm from "@components/search/SearchForm";
import Footer from "@components/Footer";
import TopProList from "@components/list/TopProList";
import RowList from "@components/list/RowList";
import ListSorting from "@components/list/ListSorting";

const SearchListPage = () => {
  const code = "search_container";
  const category = "search";
  const pageType = "sub_main";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <section className="semina_select_sect">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">프로검색</h3>
            </div>
            <SearchForm />
          </div>
        </section>
        <section className="top_pro">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">top 프로</h3>
              <button type="button" className="guideBtn">
                상품안내
              </button>
            </div>
            <TopProList />
          </div>
        </section>
        <section className="search_list_sect">
          <div className="inner">
            <ListSorting category={category} />
            <RowList category={category} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchListPage;
