import React, { Component } from "react";
import { Link } from "react-router-dom";

import silhouetteImg from "@img/main/silhouette_img.png";
import StarBtn from "@components/buttons/StarBtn";

const TopProList = () => {
  return (
    <>
      <ul className="cardList">
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
        <li>
          <Link to="#!">
            <figure>
              <img src={silhouetteImg} alt="실루엣 이미지" />
            </figure>
            <div className="info_box">
              <h3>경력 3년 이상</h3>
              <p className="name">박 O O</p>
              <p className="info">동물병원/실장</p>
              <p className="area">서울 강남구/강동구/송파구</p>
            </div>
          </Link>
          <StarBtn />
        </li>
      </ul>
    </>
  );
};

export default TopProList;
