import React, { useState } from "react";
import { InputRow } from "./InputGroup";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Button } from "@assets/style/button/Buttons";

export default function InputEmailGroup({ id, id2, id3, name, holder }) {
  const [state, setState] = useState(0);
  const handleChange = (e) => setState(e.target.value == "direct" ? 1 : 0);
  return (
    <InputRow email>
      <input type="email" id={id} name={name} placeholder={holder} />
      <span>@</span>
      <select name={name} id={id2} onChange={handleChange}>
        <option value="0">선택</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="daum.net">daum.net</option>
        <option value="korea.com">korea.com</option>
        <option value="nate.com">nate.com</option>
        <option value="yahoo.com">yahoo.com</option>
        <option value="direct">직접입력</option>
      </select>
      <input
        type="text"
        id={id3}
        name={name}
        disabled={state ? "" : "disabled"}
      />
    </InputRow>
  );
}

export function InputPhone({ id, name }) {
  return (
    <InputRow phone>
      <select id={id} name={name}>
        <option value="">선택</option>
        <option value="010">010</option>
        <option value="011">011</option>
        <option value="012">012</option>
        <option value="013">013</option>
      </select>
      <span>-</span>
      <input />
      <span>-</span>
      <input />
    </InputRow>
  );
}

export function Checkbox({
  id,
  name,
  children,
  onChange,
  onClick,
  checked,
  defaultValue,
}) {
  return (
    <div className="chk_box">
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        onClick={onClick}
        checked={checked}
        defaultValue={defaultValue}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

export function InputAddressGroup({ id, name, id2, name2 }) {
  const CURRENT_URL =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(CURRENT_URL);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      <InputRow asideBtn>
        <input type="text" id={id} name={name} />
        <Button lineBlack onClick={handleClick}>
          주소찾기
        </Button>
      </InputRow>
      <input type="text" id={id2} name={name2} />
    </>
  );
}
