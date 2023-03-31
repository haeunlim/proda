import React from "react";

import Header from "@components/Header";
import SearchForm from "@components/search/SearchForm";
import Footer from "@components/Footer";
import TopProList from "@components/list/TopProList";
import SearchList from "@components/list/SearchList";
import ListSorting from "@components/list/ListSorting";
import { SectTtl, SectTtlBox } from "@components/ttl/titleStyled";

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
            <SectTtlBox>
              <SectTtl>프로검색</SectTtl>
            </SectTtlBox>
            <SearchForm />
          </div>
        </section>
        <section className="top_pro">
          <div className="inner">
            <TopProList />
          </div>
        </section>
        <section className="search_list_sect">
          <div className="inner">
            <SearchList category={category} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchListPage;
