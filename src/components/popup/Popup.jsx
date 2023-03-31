import React from "react";
import { Button } from "@components/buttons/Buttons";
import styled from "styled-components";
const SupportBtn = styled(Button)`
  box-shadow: 0 0.6875rem 1.2rem rgba(1, 216, 223, 0.25);
  border-radius: 5px;
`;
const Popup = ({ setPreview, ttl, subTtl, popName }) => {
  const handleHidden = () => {
    setPreview(false);
  };

  return (
    <div className={`popup ${popName}`} id="">
      <div className="pop_wrap">
        <button
          type="button"
          className="pop_close"
          onClick={handleHidden}
        ></button>
        <h2 className="pop_ttl">{ttl}</h2>
        {subTtl ? <p class="pop_sub_ttl">{subTtl}</p> : ""}

        {popName == "pop_resume" ? (
          <div className="btn_wrap flex_c_c">
            <SupportBtn>지원하기</SupportBtn>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Popup;
