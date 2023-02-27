import React from "react";

const ListSorting = ({ category }) => {
  return (
    <>
      <div className="list-top-row flex_b_c">
        {category == "semina" || category == "search" ? (
          <p className="list-count">
            전체 <span>1,066,206</span>건
          </p>
        ) : (
          <div className="flex">
            <select name="" id="" className="sorting-select">
              <option value="">분야별</option>
            </select>
            <select name="" id="" className="sorting-select">
              <option value="">경력별</option>
            </select>
            <div className="sorting-searchBox">
              <input type="text" placeholder="기업명, 공고 제목 등 검색" />
              <button type="button" className="sorting-searchBtn">
                검색
              </button>
            </div>
          </div>
        )}
        {category == "semina" || category == "recruitment" ? (
          <select name="" id="" className="sorting-select">
            <option value="">최신순</option>
          </select>
        ) : (
          <div className="flex">
            <select name="" id="" className="sorting-select">
              <option value="">분야별</option>
            </select>
            <select name="" id="" className="sorting-select">
              <option value="">경력별</option>
            </select>
            <select name="" id="" className="sorting-select">
              <option value="">30개씩</option>
            </select>
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default ListSorting;
