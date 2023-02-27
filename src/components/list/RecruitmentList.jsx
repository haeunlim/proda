import React from "react";
import { Link } from "react-router-dom";
import item01Img from "@assets/img/list/item01.jpg";
import item02Img from "@assets/img/list/item02.jpg";
import item03Img from "@assets/img/list/item03.jpg";
import item04Img from "@assets/img/list/item04.jpg";
import item05Img from "@assets/img/list/item05.jpg";
import item06Img from "@assets/img/list/item06.jpg";
import item07Img from "@assets/img/list/item07.jpg";
import item08Img from "@assets/img/list/item08.jpg";

const RecruitmentList = ({ category }) => {
  const viewLink = "/recruitment/view";
  const companyLink = "/recruitment/company";

  return (
    <>
      <ul className="item_list">
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="어나더베이비에서 애견미용사를 모시려합니다"
            >
              <img src={item01Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              <p className="com_name">어나더베이비</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                어나더베이비에서 애견미용사를 모시려합니다
              </p>
            </Link>
            <span className="category red">애견 미용실</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다"
            >
              <img src={item02Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              <p className="com_name">브이아이피동물의료센터</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다
              </p>
            </Link>
            <span className="category org">동물병원</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="보호소 상담사 동물관리 경력무관 채용합니다"
            >
              <img src={item03Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">아이조아펫파크 대구점</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                보호소 상담사 동물관리 경력무관 채용합니다
              </p>
            </Link>
            <span className="category blue">반려동물 관련업</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="[이승진동물의료센터] 수의테크니션 모집(야간근무조)"
            >
              <img src={item04Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">이승진동물의료센터</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                [이승진동물의료센터] 수의테크니션 모집(야간근무조)
              </p>
            </Link>
            <span className="category org">동물병원</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다."
            >
              <img src={item05Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">㈜브이아이펫</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다.
              </p>
            </Link>
            <span className="category blue">반려동물 관련업</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="[강동,송파] 도기프렌즈 애견유치원 실장 모집합니다."
            >
              <img src={item06Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">워킹페코</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                [강동,송파] 도기프렌즈 애견유치원 실장 모집합니다.
              </p>
            </Link>
            <span className="category purple">학원</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="몬테에서 카페업무 및 매장관리할 직원을 채용합니다"
            >
              <img src={item07Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">아이조아펫파크 대구점</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                몬테에서 카페업무 및 매장관리할 직원을 채용합니다.
              </p>
            </Link>
            <span className="category green">애견카페</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="일산 대화동 애견 카페에서 함께 근무할 직원을 모집합니다."
            >
              <img src={item08Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">멍멍이네</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                일산 대화동 애견 카페에서 함께 근무할 직원을 모집합니다.
              </p>
            </Link>
            <span className="category">애견카페</span>
          </div>
        </li>
        {category == "recruitment" ? moreList() : ""}
      </ul>
    </>
  );
  function moreList() {
    return (
      <>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="어나더베이비에서 애견미용사를 모시려합니다"
            >
              <img src={item01Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              <p className="com_name">어나더베이비</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                어나더베이비에서 애견미용사를 모시려합니다
              </p>
            </Link>
            <span className="category red">애견 미용실</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다"
            >
              <img src={item02Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              <p className="com_name">브이아이피동물의료센터</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다
              </p>
            </Link>
            <span className="category org">동물병원</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="보호소 상담사 동물관리 경력무관 채용합니다"
            >
              <img src={item03Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">아이조아펫파크 대구점</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                보호소 상담사 동물관리 경력무관 채용합니다
              </p>
            </Link>
            <span className="category blue">반려동물 관련업</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="[이승진동물의료센터] 수의테크니션 모집(야간근무조)"
            >
              <img src={item04Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">이승진동물의료센터</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                [이승진동물의료센터] 수의테크니션 모집(야간근무조)
              </p>
            </Link>
            <span className="category org">동물병원</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다."
            >
              <img src={item05Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">㈜브이아이펫</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다.
              </p>
            </Link>
            <span className="category blue">반려동물 관련업</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="[강동,송파] 도기프렌즈 애견유치원 실장 모집합니다."
            >
              <img src={item06Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">워킹페코</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                [강동,송파] 도기프렌즈 애견유치원 실장 모집합니다.
              </p>
            </Link>
            <span className="category purple">학원</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다."
            >
              <img src={item05Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">㈜브이아이펫</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다.
              </p>
            </Link>
            <span className="category blue">반려동물 관련업</span>
          </div>
        </li>
        <li>
          <Link to={viewLink}>
            <figure
              className="thumb"
              title="[강동,송파] 도기프렌즈 애견유치원 실장 모집합니다."
            >
              <img src={item06Img} alt="" />
            </figure>
          </Link>
          <div className="item_info">
            <Link to={companyLink}>
              {" "}
              <p className="com_name">워킹페코</p>
            </Link>
            <Link to={viewLink}>
              <p className="subject">
                [강동,송파] 도기프렌즈 애견유치원 실장 모집합니다.
              </p>
            </Link>
            <span className="category purple">학원</span>
          </div>
        </li>
      </>
    );
  }
};

export default RecruitmentList;
