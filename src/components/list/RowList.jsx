import React from "react";
import { Link } from "react-router-dom";

import seminaImg01 from "@img/sub/semina_list01.jpg";
import seminaImg02 from "@img/sub/semina_list02.jpg";
import seminaImg03 from "@img/sub/semina_list03.jpg";
import seminaImg04 from "@img/sub/semina_list04.jpg";
import seminaImg05 from "@img/sub/semina_list05.jpg";
import profileImg from "@img/sub/profile_bg.jpg";
import Btn from "@components/buttons/Btn";
import StarBtn from "@components/buttons/StarBtn";
import { Pager } from "@components/Pager";
import BtnWrap from "@components/buttons/BtnWrap";
import { MoreBtn } from "@components/buttons/ReturnBtn";

function List(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    let tag1;
    let tagText1;
    let tag2;
    let tagText2;
    if (t.info1 == "done") {
      tag1 = "done";
      tagText1 = "마감";
    } else {
      tag1 = "ing";
      tagText1 = "모집중";
    }

    if (t.info2 == "free") {
      tag2 = "free";
      tagText2 = "무료";
    } else {
      tag2 = "pay";
      tagText2 = "유료";
    }

    lis.push(
      <li key={t.id} className={t.info1} data-href={t.info2}>
        <div className="item_thumb_box">
          <div
            className="item_thumb"
            style={{ backgroundImage: `url(${t.bgImg})` }}
            title={t.title}
          ></div>
        </div>
        <div className="item_info_wrap">
          <Link to="/academy/semina_view" className="subject">
            {t.subj}
          </Link>
          <p className="date_info">{t.date}</p>
          <div className="tag_box">
            <span className={tag1}>{tagText1}</span>
            <span className={tag2}>{tagText2}</span>
          </div>
        </div>
      </li>
    );
  }

  return (
    <>
      <ul className="rowList academy_list">{lis}</ul>
    </>
  );
}

function List2(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];

    lis.push(
      <li key={t.id}>
        <figure>
          <div
            className="profile"
            style={{ backgroundImage: `url(${t.bgImg})` }}
          ></div>
          <figcaption>
            <Link to="/search/view_resume" className="subject">
              {t.subj}
            </Link>
            <div className="info_txt">
              <span>{t.name}</span>
              <span>{t.age}</span>
              <span className="color_b1">{t.career}</span>
            </div>
          </figcaption>
        </figure>
        <div className="job">
          <p>{t.job}</p>
        </div>
        <div className="reg">
          <p>{t.reg}</p>
        </div>
        <div className="time">
          <p>{t.time}</p>
        </div>
        <div className="star_wrap">
          <StarBtn />
        </div>
      </li>
    );
  }

  return (
    <>
      <ul className="rowList profile_list">{lis}</ul>
    </>
  );
}

const RowList = ({ category }) => {
  const seminaList = [
    {
      id: 1,
      info1: "",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg01,
      subj: "[반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 2,
      info1: "done",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg02,
      subj: "돈 잘 버는 애견미용사로 취업하기",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "마감",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 3,
      info1: "ing",
      info2: "pay",
      title: "이미지 설명",
      bgImg: seminaImg03,
      subj: "[반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 4,
      info1: "ing",
      info2: "pay",
      title: "이미지 설명",
      bgImg: seminaImg04,
      subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 5,
      info1: "ing",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg05,
      subj: "[서울특별시 특별강연] 피곤한 개가 행복하다! 반려지식, 급 충전",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 6,
      info1: "ing",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg01,
      subj: "반려동물과 함께하는 행복한 삶",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 7,
      info1: "done",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg02,
      subj: "[서울 반려동물 시민학교] 댕댕아! 냥이야! 우리같이 학교가자!",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "마감",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 8,
      info1: "ing",
      info2: "pay",
      title: "이미지 설명",
      bgImg: seminaImg03,
      subj: "반려동물 체중 관리 온라인 아카데미에 동물병원 스탭분들을 초대합니다.",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 9,
      info1: "ing",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg04,
      subj: "[반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "모집중",
      payState: "pay",
      tagText2: "유료",
    },
    {
      id: 10,
      info1: "done",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg05,
      subj: "동물과 행복하게 반려동물과 동행하기",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
      tagText1: "마감",
      payState: "free",
      tagText2: "무료",
    },
  ];
  const searchList = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      {category == "semina" ? (
        <>
          <List topics={seminaList} />
          <BtnWrap className="flex_c_c">
            <MoreBtn>더보기</MoreBtn>
          </BtnWrap>
        </>
      ) : (
        ""
      )}
      {category == "search" ? (
        <>
          <List2 topics={searchList} />
          <Pager curPage="1" totalPage="5" pageBtnNum="5" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default RowList;
