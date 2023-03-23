import React from "react";
import { Link, useLocation } from "react-router-dom";

function Academy(props) {
  const location = useLocation();
  const tabs = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    tabs.push(
      <Link
        key={t.id}
        to={`/academy/` + t.link}
        className={`${
          location.pathname.includes("/academy/" + t.link) ? "active" : ""
        }`}
      >
        {t.title}
      </Link>
    );
  }

  return (
    <>
      <div className="category_top">{tabs}</div>
    </>
  );
}

const Tab = ({ code }) => {
  const academyTp = [
    { id: 1, title: "세미나", link: "semina" },
    { id: 2, title: "취업꿀팁", link: "good_tip" },
    { id: 3, title: "일상", link: "daily" },
    { id: 4, title: "공지사항", link: "notice" },
    { id: 5, title: "취업고민", link: "comunity" },
  ];

  return <>{(code = "academy" ? <Academy topics={academyTp} /> : "")}</>;
};

export default Tab;
