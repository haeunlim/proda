import React from "react";
import ResumeBox from "./ResumeBox";

export default function ResumeCompany() {
  return (
    <ResumeBox label="회사소개">
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
                <strong>○○○○○○○</strong>
              </td>
              <td>
                <div class="disc">
                  조형예술대학 의류학(주전공), 인문과학대학 미술사학(복수전공)
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ResumeBox>
  );
}
