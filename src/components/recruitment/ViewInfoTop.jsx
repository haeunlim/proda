import React from "react";

const ViewInfoTop = () => {
  return (
    <div className="view_info_top">
      <h3 className="sect_ttl big">
        어나더베이비에서 애견미용사를 모시려 합니다
      </h3>
      <div className="item_info">
        <span className="com_name">어나더베이비</span>
        <span className="region">서울</span>
        <span className="category red">애견 미용실</span>
      </div>
      <div className="desc">
        애견산업은 반려견의 위생제품 및 각종 용품들을 취급하는 제 1위 기업로
        발돋음 하기 위해 최선을 다하고 있습니다. 발빠른 애견산업에 민감하고
        신속하게 대응하기 위해 전 사원들이 노력중입니다.
      </div>

      <div className="condition_list">
        <dl>
          <dt>주요업무</dt>
          <dd>반려동물 진료 보조</dd>
          <dd>매장 관리</dd>
          <dd>애견미용</dd>
        </dl>

        <dl>
          <dt>자격요건</dt>
          <dd>경력 : 경력 1년 이상</dd>
          <dd>인근거주자, 해당직무 근무경험</dd>
        </dl>
      </div>
    </div>
  );
};

export default ViewInfoTop;
