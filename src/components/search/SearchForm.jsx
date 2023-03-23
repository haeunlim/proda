import React from "react";
import Btn from "@components/buttons/Btn";
import { InputRow } from "@components/form/InputGroup";
import BtnWrap from "@components/buttons/BtnWrap";

const searchForm = () => {
  return (
    <>
      <div className="search_wrap">
        <InputRow>
          <label for="">거주지역</label>
          <div className="select_box flex__c">
            <select name="" id="">
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
            </select>
            <select name="" id="">
              <option value="">시/군/구</option>
            </select>
          </div>
        </InputRow>
        <InputRow>
          <label for="">직종 및 경력</label>

          <div className="select_box flex__c">
            <select name="" id="">
              <option value="">대분류</option>
            </select>

            <select name="" id="">
              <option value="">중분류</option>
            </select>

            <select name="" id="">
              <option value="">경력선택</option>
            </select>
          </div>
        </InputRow>
        <BtnWrap className="flex_c_c">
          <Btn text="검색" btnName="bg-point mx-w260" />
          <Btn text="초기화" btnName="mx-w100" />
        </BtnWrap>
      </div>
    </>
  );
};

export default searchForm;
