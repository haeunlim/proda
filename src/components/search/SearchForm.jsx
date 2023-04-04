import React from "react";
import { BtnWrap } from "@components/buttons/BtnWrap";
import { BtnBig } from "@components/buttons/Buttons";
import { SelectBox, Select } from "@components/form/SelectBox";
import styled from "styled-components";
const SearchWrap = styled.div`
  border-top: solid 2px #252525;

  ${SelectBox} {
    width: 100%;
    padding: 16px 20px;
    ${Select} {
      max-width: 190px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    border-width: 1.5px;

    ${SelectBox} {
      padding: 0 0 15px;
    }
  } ;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #eee;
  label {
    width: 160px;
    font-size: 20px;
    font-weight: 500;
    padding: 0 20px;
    flex: 0 0 auto;
  }

  @media ${(props) => props.theme.mobile} {
    display: block;
    padding: 0.384rem 0;
    label {
      width: 100%;
      font-size: 1.1538rem;
      padding: 1.1538rem 0;
    }
  } ;
`;
const SearchBtn = styled(BtnBig)`
  width: 260px;

  @media ${(props) => props.theme.mobile} {
    width: calc(100% - 8.846rem);
  } ;
`;
const ResetBtn = styled(BtnBig)`
  width: 100px;

  @media ${(props) => props.theme.mobile} {
    width: 8.0769rem;
  } ;
`;

const searchForm = () => {
  return (
    <>
      <SearchWrap className="search_wrap">
        <InputRow>
          <label for="">거주지역</label>
          <SelectBox>
            <Select name="" id="">
              <option value="">시/도</option>
              <option value="">서울특별시</option>
              <option value="">부산광역시</option>
              <option value="">대구광역시</option>
              <option value="">인천광역시</option>
              <option value="">광주광역시</option>
              <option value="">대전광역시</option>
              <option value="">울산광역시</option>
              <option value="">세종특별자치시</option>
              <option value="">경기도</option>
              <option value="">강원도</option>
              <option value="">충청북도</option>
              <option value="">충청남도</option>
              <option value="">전라북도</option>
              <option value="">전라남도</option>
              <option value="">경상북도</option>
              <option value="">경상남도</option>
              <option value="">제주특별자치도</option>
            </Select>
            <Select name="" id="">
              <option value="">시/군/구</option>
            </Select>
          </SelectBox>
        </InputRow>
        <InputRow>
          <label for="">직종 및 경력</label>
          <SelectBox>
            <Select name="" id="">
              <option value="">대분류</option>
            </Select>
            <Select name="" id="">
              <option value="">중분류</option>
            </Select>
            <Select name="" id="">
              <option value="">경력선택</option>
            </Select>
          </SelectBox>
        </InputRow>
        <BtnWrap flexCenter>
          <SearchBtn bgPoint>검색</SearchBtn>
          <ResetBtn>초기화</ResetBtn>
        </BtnWrap>
      </SearchWrap>
    </>
  );
};

export default searchForm;
