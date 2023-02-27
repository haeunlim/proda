import React from "react";
import DefaultBox from "./ResumeBox";

export default function ResumeAward() {
  return (
    <DefaultBox label="수상내역">
      <div class="cont">
        <table class="tbst02">
          <colgroup>
            <col style="width:18.18%; min-width:180px;" />
            <col style="width:15.45%; min-width:130px;" />
            <col style="width:auto;" />
          </colgroup>

          <tbody>
            <tr>
              <td>2014. 03 ~2018. 08</td>
              <td>
                <strong>엠케이퍼블리싱</strong>
              </td>
              <td>
                <div class="disc">인터넷정보진흥원</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultBox>
  );
}
