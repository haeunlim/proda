import React from "react";
import DefaultBox from "./ResumeBox";

export default function ResumeConditions() {
  return (
    <DefaultBox label="희망근무조건">
      <div class="cont cond">
        <table class="tbst02">
          <colgroup>
            <col style="width:18.18%;" />
            <col style="width:auto;" />
          </colgroup>

          <tbody>
            <tr>
              <th>희망직종</th>
              <td>동물병원/매니져</td>
            </tr>
            <tr>
              <th>희망근무지</th>
              <td>서울전지역</td>
            </tr>
            <tr>
              <th>희망연봉</th>
              <td>면접 후 결정</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultBox>
  );
}
