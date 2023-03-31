import React from "react";
import styled from "styled-components";

import notiIconW from "@img/ico/notif_icon_white.png";

export const NotifiBtn = styled.button`
  width: 42px;
  height: 42px;
  margin-left: 20px;
  position: relative;
  background: url(${notiIconW}) no-repeat center;

  &.on::after {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: 8px;
    background: var(--bs-point);
  }
`;
export default function NotificationBtn() {
  return <NotifiBtn></NotifiBtn>;
}
