import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ResumeSubject from "@components/Resume/ResumeSubject";
import ResumeRecommend from "@components/Resume/ResumeRecommend";
import ResumeProfile from "@components/Resume/ResumeProfile";
import ResumeBox from "@components/Resume/ResumeBox";

const SearchViewPage = () => {
  const code = "search_container";
  const category = "search";
  const pageType = "view";

  return (
    <>
      <Header />
      <div id="container" className={`sub ${code} ${pageType}`}>
        <section>
          <ResumeSubject />
          <ResumeRecommend />
          <ResumeProfile />
          <ResumeBox label="회사소개">
            <div className="cont">
              <table className="tbst02">
                <tbody>
                  <tr>
                    <td>2014. 03 ~2018. 08</td>
                    <td>
                      <strong>○○○○○○○</strong>
                    </td>
                    <td>
                      <div className="disc">
                        조형예술대학 의류학(주전공), 인문과학대학
                        미술사학(복수전공)
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ResumeBox>
          <ResumeBox label="학력">
            <p className="label">
              경력 <span>경력 3년 이상</span>
            </p>
            <div className="sv_log t_ct">
              <div className="log_top">
                <p className="sv_guide">
                  김 ○○님은 <b>최근 ○○○○ 테크니션</b>으로 근무 하였습니다.
                </p>
                <p className="disc">
                  이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을 확인 할
                  수 있습니다.
                </p>
              </div>
              <button type="button" className="btnst04">
                경력사항 확인하기
              </button>
            </div>
          </ResumeBox>
          <ResumeBox label="수상내역">
            <div className="cont">
              <table className="tbst02">
                <tbody>
                  <tr>
                    <td>2014. 03 ~2018. 08</td>
                    <td>
                      <strong>엠케이퍼블리싱</strong>
                    </td>
                    <td>
                      <div className="disc">인터넷정보진흥원</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ResumeBox>
          <ResumeBox label="자기소개서">
            <div className="sv_log t_ct">
              <div className="log_top">
                <p className="sv_guide">
                  김 ○○님은 <b> 501자의 자기소개서</b>를 작성하였습니다.
                </p>
                <p className="disc">
                  이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을 확인 할
                  수 있습니다.
                </p>
              </div>
              <button type="button" className="btnst04">
                전체내용 확인하기
              </button>
            </div>
          </ResumeBox>
          <ResumeBox label="희망근무조건">
            <div className="cont cond">
              <table className="tbst02">
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
          </ResumeBox>
          <div className="sv_check_wrap">
            <p>위의 모든 기재사항은 사실과 다름없음을 확인합니다.</p>
            <p>작성자 : 김 ○○</p>

            <div className="check_guide">
              <p>
                {" "}
                이 이력서는 2022년 03월 25일 (금)에 최종 업데이트된 이력서
                입니다. 위조된 문서를 등록하여 취업활동에 이용 시 법적 책임을
                지게 될 수 있습니다.
              </p>
              <p>
                프로다는 구직자가 등록 한 문서에 대해 보증하거나 별도의 책임을
                지지 않으며 첨부된 문서를 신뢰하여 발생한 법적 분쟁에 책임을
                지지 않습니다.
              </p>
              <p>
                또한 구인/구직 목적 외 다른 목적으로 이용 시 이력서 삭제 혹은
                비공개 조치가 될 수 있습니다.
              </p>
            </div>
          </div>
        </section>
        <ResumeRecommend />
      </div>
      <Footer />
    </>
  );
};

export default SearchViewPage;
