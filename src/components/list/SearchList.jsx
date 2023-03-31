import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profileImg from "@img/sub/profile_bg.jpg";
import StarBtn from "@components/buttons/StarBtn";
import { Pager } from "@components/Pager";
import ListSorting from "./ListSorting";
export default function SearchList({ category }) {
  const data = [
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
  ];
  return (
    <>
      <ListSorting category={category} />
      <ul className="rowList profile_list">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <figure>
                <div
                  className="profile"
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                ></div>
                <figcaption>
                  <Link to="/search/view_resume" className="subject">
                    {item.subj}
                  </Link>
                  <div className="info_txt">
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span className="color_b1">{item.career}</span>
                  </div>
                </figcaption>
              </figure>
              <div className="job">
                <p>{item.job}</p>
              </div>
              <div className="reg">
                <p>{item.reg}</p>
              </div>
              <div className="time">
                <p>{item.time}</p>
              </div>
              <div className="star_wrap">
                <StarBtn />
              </div>
            </li>
          );
        })}
      </ul>
      <Pager curPage="1" totalPage="5" pageBtnNum="5" />
    </>
  );
}
