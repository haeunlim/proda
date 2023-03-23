import React from "react";

export default function TotalNum({ num }) {
  return (
    <p className="list-count">
      전체 <span>{num}</span>건
    </p>
  );
}
