import React from "react";
import styled from "styled-components";
import good from "@img/ico/ico_review_19x19.png";
import review from "@img/ico/ico_review_18x15.png";

export const StateWrap = styled.div``;
const State = styled.span`
  display: inline-block;
  font-size: 18px;
  color: #757575;
  padding-left: 27px;
  background-position: left center;
  background-repeat: no-repeat;
  & + span {
    margin-left: 30px;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.0769rem;
    padding-left: 1.5769rem;
    background-size: 1.1923rem auto;

    & + span {
      margin-left: 1.3076rem;
    }
  }
`;

const GoodState = styled(State)`
  background-image: url(${good});
`;
const ReviewState = styled(State)`
  background-image: url(${review});
`;

export default function ViewState({ reviewVal, goodVal }) {
  return (
    <StateWrap>
      <GoodState>{goodVal}</GoodState>
      <ReviewState>{reviewVal}</ReviewState>
    </StateWrap>
  );
}
