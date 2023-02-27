import ApplyPopCarousel from "@components/carousel/ApplyPopCarousel";
import { useState, useEffect } from "react";
import Form from "./Form";
import Done from "./Done";
import Share from "./Share";

const ApplyPop = ({ setPreview, setSharePop }) => {
  const [formShow, setFormShow] = useState(true);
  const [share, setshare] = useState(false);
  const [stateBasic, setStateBasic] = useState(false);
  const handleHidden = () => {
    setPreview(false);
  };

  return (
    <div className={`popup ${setPreview ? "on" : ""}`} id="">
      <div className="pop_wrap">
        <h2 className="pop_ttl">
          {setSharePop ? "공유하기" : formShow ? "지원하기" : "입사지원"}
        </h2>
        {setSharePop ? (
          <Share />
        ) : formShow ? (
          <Form setFormShow={setFormShow} />
        ) : (
          <Done />
        )}
        <button
          type="button"
          className="pop_close"
          onClick={handleHidden}
        ></button>
      </div>
    </div>
  );
};

export default ApplyPop;
