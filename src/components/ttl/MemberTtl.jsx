import React from "react";

const MemberTtl = ({ ttlText, ttl }) => {
  return (
    <div className="mem_ttl_row">
      <h2>{ttl}</h2>
      {ttlText ? <p>{ttlText}</p> : ""}
    </div>
  );
};
export default MemberTtl;
