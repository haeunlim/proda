import React from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import profile from "@img/ico/com_ico32x32.jpg";
import ReturnBtn from "@components/buttons/ReturnBtn";
import { DailyWriteBtn } from "@components/buttons/WriteBtn";
import DailyUserInfo from "@components/user/DailyUserInfo";
import { Container, Inner } from "@assets/style/layout/Container";
import { ViewTtl } from "@assets/style/fontStyle/title";
import { DescWrap } from "@assets/style/fontStyle/Text";
import { FlexBox } from "@assets/style/layout/Flex";
import ViewState from "@components/ui/ViewState";
import { BtnWrap } from "@assets/style/button/BtnWrap";

const DailyViewPage = () => {
  const code = "academy";
  const category = "daily";

  return (
    <>
      <Header />
      <Container>
        <Inner>
          <Tab code={code} />
        </Inner>

        <section className="view_sect2">
          <Inner>
            <ViewArea>
              <ViewTopInfo>
                <ViewTtl>
                  반려동물을 키우기 전에 신중하게 고려해야 할 8가지
                </ViewTtl>
                <DailyUserInfo
                  ico={profile}
                  id="crazy830727"
                  date="2022.04.18"
                />
              </ViewTopInfo>
              <ViewContent>
                <DescWrap>
                  <p>
                    안녕하세요! 사회생활 15년차에 서비스 기획자로 12년을 달려온
                    직장인입니다. 그동안 많은 프로젝트에 참여하여 PM으로 PO로
                    리더로 근무를 했는데요. 돌이켜보면 기획자로서 전반기에
                    성취했던 결과나 만족을 후반기로 갈수록 체감하기가 어려워지는
                    것 같았습니다. 모든 것은 개인적인 책임에서 보면 제
                    역량부족이라는 생각이 들어 앞으로 어떤 자세로 일을 해야 할지
                    고민이 늘어만 가고 있습니다. 혹시 저와 같은 고민을 갖고 있는
                    분들은 이런 상황을 어떻게 대처하고 계신지 궁금하네요. 정답은
                    없지만 본인 환경에 맞춰 개인적인 대응이나 선택&#40;퇴사,
                    전직, 전업, 역량강화 등&#41;을 한다고 봤을때 같은 고민을
                    하는 분들의 이야기를 듣고 싶네요! :&#41;
                  </p>
                </DescWrap>
                <FlexBox flexBC>
                  <ViewState goodVal="1" reviewVal="12" />
                  <button type="button" className="etc_btn"></button>
                </FlexBox>
              </ViewContent>
            </ViewArea>
            <CommentArea>
              <div className="write_comment">
                <DailyUserInfo
                  ico={profile}
                  id="crazy830727"
                  date="2022.04.18"
                />
                <div className="input_wrap">
                  <textarea
                    name=""
                    id=""
                    placeholder="내용을 입력해주세요."
                  ></textarea>
                  <DailyWriteBtn />
                </div>
              </div>
              <ul className="comment_list">
                <li>
                  <div className="info_top">
                    <DailyUserInfo
                      ico={profile}
                      id="crazy830727"
                      date="2022.04.18"
                    />
                    <button type="button" className="etc_btn"></button>
                  </div>
                  <div className="info_bot">
                    신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을
                    안했습니다.
                  </div>
                </li>
                <li>
                  <div className="info_top">
                    <DailyUserInfo
                      ico={profile}
                      id="crazy830727"
                      date="2022.04.18"
                    />
                    <button type="button" className="etc_btn"></button>
                  </div>
                  <div className="info_bot">
                    신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을
                    안했습니다.
                  </div>
                </li>
              </ul>
            </CommentArea>

            <BtnWrap flexCenter>
              <ReturnBtn>뒤로가기</ReturnBtn>
            </BtnWrap>
          </Inner>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default DailyViewPage;

const ViewTopInfo = styled.div`
  padding: 40px 0 30px;
  border-bottom: solid 1px #eee;
`;

const ViewContent = styled.div`
  padding: 30px 0;
  border-bottom: solid 1px #eee;
`;
const ViewArea = styled.article``;
const CommentArea = styled.article`
  padding-top: 30px;
  .write_comment {
    .info_top {
      display: flex;
      align-items: center;
    }

    .input_wrap {
      width: 100%;
      position: relative;
      margin-top: 13px;

      textarea {
        width: 100%;
        height: 180px;
        border-radius: 5px;
        resize: none;
        padding: 30px;
        overflow: hidden;

        &::placeholder {
          font-size: 18px;
          color: #ddd;
        }
      }

      button {
        max-width: 120px;
        font-size: 18px;
        line-height: 42px;
        position: absolute;
        right: 21px;
        bottom: 21px;
      }
    }
  }
`;

const CommentList = styled.ul`
  li {
    padding: 40px 0;
    border-bottom: solid 1px #eee;
    .info_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 13px;
    }
  }
  .info_bot {
    font-size: 18px;
    line-height: 1.5;
    color: #757575;
  }
`;
