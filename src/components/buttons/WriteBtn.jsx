import styled from "styled-components";
import { BtnBig } from "../../assets/style/button/Buttons";
const DailyWriteBtnStyled = styled(BtnBig)`
  border-radius: 21px;
`;

export function DailyWriteBtn({ onClick }) {
  return (
    <DailyWriteBtnStyled bgPoint type="submit" onClick={onClick}>
      등록
    </DailyWriteBtnStyled>
  );
}
