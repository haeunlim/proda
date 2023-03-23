import React from "react";

const MemberTab = ({ setTabOn, tabOn, tabName }) => {
  return (
    <ul className="lo_tab">
      <li
        className={`${tabOn == 0 ? "on" : ""}`}
        onClick={() => {
          setTabOn(0);
        }}
      >
        <button type="button">{tabName[0]}</button>
      </li>
      <li
        className={`${tabOn == 1 ? "on" : ""}`}
        onClick={() => {
          setTabOn(1);
        }}
      >
        <button type="button">{tabName[1]}</button>
      </li>
    </ul>
  );
};
export default MemberTab;
