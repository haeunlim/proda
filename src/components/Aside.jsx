import React from "react";

import { Link } from "react-router-dom";

import asideImg1 from "@assets/img/main/aside_img01.png";
import asideImg2 from "@assets/img/main/aside_img02.png";
import asideImg3 from "@assets/img/main/aside_img03.png";
import asideImg4 from "@assets/img/main/aside_img04.png";
import asideImg5 from "@assets/img/main/aside_img05.png";
import asideImg6 from "@assets/img/main/aside_img06.png";
import asideImg7 from "@assets/img/main/aside_img07.png";
import asideImg8 from "@assets/img/main/aside_img08.png";

const asideImgsLeft = [
  { id: 0, link: "", img: asideImg1, alt: "통로펫살롱" },
  { id: 1, link: "", img: asideImg2, alt: "저세상반값" },
  { id: 2, link: "", img: asideImg3, alt: "싸개싸개 사시개" },
];
const asideImgsRight = [
  { id: 3, link: "", img: asideImg5, alt: "펫택시 혜택" },
  { id: 4, link: "", img: asideImg6, alt: "통로 댕댕이 보험" },
  { id: 5, link: "", img: asideImg7, alt: "댕댕이옷 할인받자" },
  { id: 6, link: "", img: asideImg8, alt: "봄엔 나랑같이 이뻐질래?" },
];
const AsideMenu = ({ asideHide }) => {
  return (
    <>
      <aside className={`left ad_wrap ${asideHide ? "" : "active"}`}>
        {asideImgsLeft.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <img src={item.img} alt={item.alt} />
            </Link>
          );
        })}
      </aside>
      <aside className={`right ad_wrap ${asideHide ? "" : "active"}`}>
        {asideImgsRight.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <img src={item.img} alt={item.alt} />
            </Link>
          );
        })}
      </aside>
    </>
  );
};

export default AsideMenu;
