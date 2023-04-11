import styled from "styled-components";
import { FlexBox } from "../layout/Flex";

export const TagBox = styled(FlexBox)`
  margin-top: 40px;

  * + * {
    margin-left: 6px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 0.7692rem;
    * + * {
      margin-left: 0.3846rem;
    }
  }
`;

export const Tag = styled.span`
  display: block;
  width: 100%;
  max-width: 52px;
  line-height: 26px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  background-color: ${(props) =>
    props.state == "ing"
      ? props.theme.point
      : props.state == "pay"
      ? props.theme.orange
      : props.state == "free"
      ? props.theme.blue
      : props.state == "done"
      ? props.theme.gray
      : ""};

  @media ${(props) => props.theme.mobile} {
    max-width: 3.5384rem;
    line-height: 2em;
    font-size: 0.8461rem;
    border-radius: 3px;
  }
`;
