import { useState, useEffect } from "react";
import Form from "./Form";
import Done from "./Done";
import Share from "./Share";
import Btn from "@components/buttons/Btn";

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
            <Btn
              text="지원하기"
              btnName="middle bg-point btn-shadow rounded-s"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Popup;
