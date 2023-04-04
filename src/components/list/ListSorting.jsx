import { SelectBox, Select } from "@components/form/SelectBox";
import React from "react";
import TotalNum from "./TotalNum";
import styled from "styled-components";

const ListTopRow = styled.div`
  margin-bottom: 10px;
  ${SelectBox} {
    width: calc(100% - 300px);
    justify-content: flex-end;
    margin-top: 15px;
    ${Select} {
      max-width: 140px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 1.1538rem;
  } ;
`;
const SortingSearchBox = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  max-width: 280px;
  input {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: none;
    margin-left: 0 !important;
    margin-top: 10px;
  }
`;
const ListSorting = ({ category }) => {
  const totalCount = "1,545,000";
  return (
    <>
      <ListTopRow className="flex_b_c mo_block_100">
        {category == "semina" || category == "search" ? (
          <TotalNum totalCount={totalCount} />
        ) : (
          <SelectBox>
            <Select name="" id="">
              <option value="">분야별</option>
            </Select>
            <Select name="" id="">
              <option value="">경력별</option>
            </Select>
            <SortingSearchBox>
              <input type="text" placeholder="기업명, 공고 제목 등 검색" />
              <button type="button" className="sorting-searchBtn">
                검색
              </button>
            </SortingSearchBox>
          </SelectBox>
        )}
        {category == "semina" || category == "recruitment" ? (
          <SelectBox>
            <Select name="" id="" className="mo_w_100">
              <option value="">최신순</option>
            </Select>
          </SelectBox>
        ) : (
          <SelectBox>
            <Select name="" id="">
              <option value="">분야별</option>
            </Select>
            <Select name="" id="">
              <option value="">경력별</option>
            </Select>
            <Select name="" id="">
              <option value="">30개씩</option>
            </Select>
          </SelectBox>
        )}
      </ListTopRow>
    </>
  );
};

export default ListSorting;
