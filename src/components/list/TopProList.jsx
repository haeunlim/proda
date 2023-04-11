import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import silhouetteImg from "@img/main/silhouette_img.png";
import StarBtn, { StarStyled } from "@components/buttons/StarBtn";

import styled from "styled-components";
import { SectTtl, SectTtlBox } from "@assets/style/fontStyle/title";
import GuideBtn from "@components/buttons/GuideBtn";
import { MoreBtn } from "@components/buttons/ReturnBtn";
import { BtnWrap } from "@assets/style/button/BtnWrap";

const TopProList = () => {
  const location = useLocation();
  const data = [
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
  ];
  const Main = location.pathname == "/main";
  return (
    <>
      <SectTtlBox className="flex_b_c" main={Main}>
        <SectTtl>TOP 프로</SectTtl>
        <GuideBtn />
      </SectTtlBox>
      <CardList
        className="cardList flex col_4 tablet_col_2 mo_col_1"
        style={{
          "--mg-x": "10px",
          "--mg-t": "20px",
          "--ta-mg-x": "10px",
          "--ta-mg-t": "20px",
          "--mo-mg-t": "14px",
        }}
      >
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
              <div className="info_box">
                <h3>{item.title}</h3>
                <p className="name">{item.name}</p>
                <p className="info">{item.info}</p>
                <p className="area">{item.area}</p>
              </div>
            </Link>
            <StarBtn />
          </li>
        ))}
      </CardList>
      <BtnWrap flexCenter>
        <MoreBtn />
      </BtnWrap>
    </>
  );
};

const CardList = styled.ul`
  ${StarStyled} {
    position: absolute;
    top: 10px;
    right: 10px;

    @media ${(props) => props.theme.mobile} {
      top: 15px;
      right: 15px;
    }
  }
`;
export default TopProList;
