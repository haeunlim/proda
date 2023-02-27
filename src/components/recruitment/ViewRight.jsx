import React, { useState } from "react";
const ViewRight = ({ setPreview, setSharePop }) => {
  const handlePreview = () => {
    setPreview(true);
    setSharePop(false);
  };
  const handleShare = () => {
    setSharePop(true);
    setPreview(true);
  };

  return (
    <>
      <div className="right" id="sticky">
        <div className="right_info">
          <button type="button" className="only_mo right_toggle"></button>
          <div className="com_info">
            <dl>
              <dt>급여 : </dt>
              <dd>면접 후 결정</dd>
            </dl>
            <dl>
              <dt>근무형태 : </dt>
              <dd>정규직</dd>
            </dl>
            <dl>
              <dt>근무시간 : </dt>
              <dd>09:00 ~ 18:00</dd>
            </dl>
          </div>

          <button
            type="button"
            className="apply_btn"
            onClick={() => handlePreview()}
          >
            지원하기
          </button>
          <ul className="com_bot">
            <li>
              <button type="button" className={`bookmark`}>
                <span className="bookmark_btn ico_btn"></span>스크랩
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`share `}
                onClick={() => handleShare()}
              >
                <span className="share_btn ico_btn"></span>공유
              </button>
            </li>
            <li>
              <button type="button" className={`heart`}>
                <span className="heart_btn ico_btn"></span>1235
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ViewRight;
