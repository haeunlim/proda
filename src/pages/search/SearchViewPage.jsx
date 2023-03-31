import React, { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ResumeSubject from "@components/Resume/ResumeSubject";
import ResumeRecommend from "@components/Resume/ResumeRecommend";
import ResumeProfile from "@components/Resume/ResumeProfile";
import ResumeBox from "@components/Resume/ResumeBox";
import RowList from "@components/list/SeminaList";
import Popup from "@components/popup/Popup";
import Table from "@components/Resume/Table";
import { BtnWrap } from "@components/buttons/BtnWrap";
import { ResumeBtn } from "@components/buttons/ResumeBtns";
import styled from "styled-components";

export const ResumeAloneBtnWrap = styled(BtnWrap)`
  margin-top: 20px;
`;

const SearchViewPage = () => {
  const code = "search_container";
  const category = "search";
  const pageType = "view";
  const popSubTtl = (
    <>
      이력서 열람 상품을 이용하시면 <br /> 전체 내용 확인 및 포지션 제안을 하실
      수 있습니다
    </>
  );
  const [login, setLogin] = useState(0);

  const [preview, setPreview] = useState(false);

  const hadlePopOpen = () => {
    setPreview(!preview);
  };
  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <section className="view_resume_sect">
          <div className="inner">
            <ResumeSubject />
            <ResumeRecommend onClick={hadlePopOpen} />
            <div className="sv_view_wrap">
              <ResumeProfile login={login} />
              <ResumeBox label="회사소개">
                {
                  <div className="cont">
                    <Table colNum="3">
                      <tr>
                        <td>2014. 03 ~2018. 08</td>
                        <td>
                          {" "}
                          <strong>
                            {login ? "이화여자대학교" : "○○○○○○○"}
                          </strong>
                        </td>
                        <td>
                          <div className="disc">
                            조형예술대학 의류학(주전공), 인문과학대학
                            미술사학(복수전공)
                          </div>
                        </td>
                      </tr>
                    </Table>
                  </div>
                }
              </ResumeBox>
              <ResumeBox label="경력" addLabel="경력 3년 이상">
                {
                  <div className={`${login ? "cont" : "sv_log"} t_ct`}>
                    {login ? (
                      <Table colNum="3">
                        <tr>
                          <td>2014. 03 ~ 재직중</td>
                          <td>○○○○○○○</td>
                          <td>
                            <div className="disc">A&amp;R팀 사원 팀원</div>
                          </td>
                        </tr>
                      </Table>
                    ) : (
                      <>
                        <div className="log_top">
                          <p className="sv_guide">
                            김 ○○님은 <b>최근 ○○○○ 테크니션</b>으로 근무
                            하였습니다.
                          </p>
                          <p className="disc">
                            이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을
                            확인 할 수 있습니다.
                          </p>
                        </div>
                        <ResumeAloneBtnWrap>
                          <ResumeBtn lack alone bgBlue>
                            경력사항 확인하기
                          </ResumeBtn>
                        </ResumeAloneBtnWrap>
                      </>
                    )}
                  </div>
                }
              </ResumeBox>
              <ResumeBox label="수상내역">
                <div className="cont">
                  <Table colNum="3">
                    <tr>
                      <td>2014. 03 ~2018. 08</td>
                      <td>
                        <strong>엠케이퍼블리싱</strong>
                      </td>
                      <td>
                        <div className="disc">인터넷정보진흥원</div>
                      </td>
                    </tr>
                  </Table>
                </div>
              </ResumeBox>
              <ResumeBox label="자기소개서">
                <div className={`${login ? "" : "t_ct"}  sv_log`}>
                  {login ? (
                    <>
                      <div className="log_top">
                        <p className="subject">자기소개서</p>
                        <p className="disc">
                          안녕하세요. 김유정입니다. 저는 엄격한 어머니와 다정한
                          아버지 밑에서 자랐으며, 4남 1녀로 장녀로 태어났습니다.
                          건강한 신체에 건강한 정신이 깃든다는 마인드 속에
                          자라서.
                        </p>
                      </div>
                      <div className="log_bot">
                        <p className="alert">
                          본 내용은 개인신상정보 보호를 위해 개인회원이 직접
                          작성한 총 <span>500</span> 내용 중 일부만 발췌한
                          것입니다.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="log_top">
                      <p className="sv_guide">
                        김 ○○님은 <b> 501자의 자기소개서</b>를 작성하였습니다.
                      </p>
                      <p className="disc">
                        이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을
                        확인 할 수 있습니다.
                      </p>
                    </div>
                  )}

                  <ResumeAloneBtnWrap>
                    <ResumeBtn lack alone bgBlue>
                      전체내용 확인하기
                    </ResumeBtn>
                  </ResumeAloneBtnWrap>
                </div>
              </ResumeBox>
              <ResumeBox label="희망근무조건">
                <div className="cont cond">
                  <Table>
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
                  </Table>
                </div>
              </ResumeBox>
              <div className="sv_check_wrap">
                <p>위의 모든 기재사항은 사실과 다름없음을 확인합니다.</p>
                <p>작성자 : 김 ○○</p>
                <div className="check_guide">
                  <p>
                    이 이력서는 2022년 03월 25일 (금)에 최종 업데이트된 이력서
                    입니다. 위조된 문서를 등록하여 취업활동에 이용 시 법적
                    책임을 지게 될 수 있습니다.
                  </p>
                  <p>
                    프로다는 구직자가 등록 한 문서에 대해 보증하거나 별도의
                    책임을 지지 않으며 첨부된 문서를 신뢰하여 발생한 법적 분쟁에
                    책임을 지지 않습니다.
                  </p>
                  <p>
                    또한 구인/구직 목적 외 다른 목적으로 이용 시 이력서 삭제
                    혹은 비공개 조치가 될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <ResumeRecommend onClick={hadlePopOpen} />
          </div>
        </section>
        <section className="search_list_sect">
          <div className="inner">
            <div className="sect_ttl_box">
              <h3 className="sect_ttl">지금 본 이력서와 유사해요</h3>
            </div>
            <RowList category={category} />
          </div>
        </section>
        {preview ? (
          <Popup
            ttl="이력서 열람 상품 이용 신청하기"
            subTtl={popSubTtl}
            setPreview={setPreview}
            popName="pop_resume"
          />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchViewPage;
