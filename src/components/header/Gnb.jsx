import React from "react";
import { Link } from "react-router-dom";

export default function Gnb() {
  const topics = [
    { title: "프로다소개", link: "about", linkParent: "about" },
    {
      title: "프로채용",
      link: "recruitment",
      linkParent: "recruitment",
    },
    { title: "프로검색", link: "search_list", linkParent: "search" },
    { title: "프로아카데미", link: "semina", linkParent: "academy" },
  ];

  return (
    <div className="gnb_list">
      {topics.map((item, index) => (
        <li
          key={index}
          className={`${
            location.pathname.includes("/" + item.linkParent) ? "active" : ""
          }`}
        >
          <Link to={"/" + item.linkParent + "/" + item.link}>{item.title}</Link>
        </li>
      ))}
    </div>
  );
}
