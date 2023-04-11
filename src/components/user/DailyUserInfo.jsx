import React from "react";
import {
  UserIco,
  UserId,
  UserInfoBox,
  UserInfoDate,
} from "@assets/style/component/DailyUser";
import userIcoDefault from "@img/sub/userIco_default.jpg";

export default function DailyUserInfo({ ico, id, date }) {
  return (
    <UserInfoBox>
      <UserIco
        style={{
          backgroundImage: `url(${ico == "" ? userIcoDefault : ico})`,
        }}
      ></UserIco>
      <UserId>{id}</UserId>
      <UserInfoDate>{date}</UserInfoDate>
    </UserInfoBox>
  );
}
