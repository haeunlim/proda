import React from "react";

export default function Table({ colNum, children }) {
  return (
    <table className="tbst02">
      <colgroup>
        <col width="18.18%;" />
        {colNum == 3 ? (
          <>
            <col width="15.45%" /> <col width="auto" />
          </>
        ) : (
          <col width="auto" />
        )}
      </colgroup>

      <tbody>{children}</tbody>
    </table>
  );
}
