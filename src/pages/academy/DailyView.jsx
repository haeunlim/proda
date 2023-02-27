import React from "react"

import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import Btn from "@components/buttons/Btn";
import profile from "@img/ico/com_ico32x32.jpg";


function goToList(){
    history.back(-1);
}


const DailyView = () => {
    const code = "academy";
    const category = "daily";
    const btnName1="btn bigSmall bg-point rounded-2";
    const btnName2="btn bigBtn goListBtn";


return (
<>
    <Header />
    <div id="container" className={`sub ${code} ${category}`}>
        <div className="inner">
        <Tab code={code}/>
        </div>

        <section className="view_sect2">
            <div className="inner">
                <article className="view_area">
                    
                    <div className="view_top_info">
                        <p className="subject">반려동물을 키우기 전에 신중하게 고려해야 할 8가지</p>
                        <div className="daily_user_info">
                            <span className="user_ico" style={{backgroundImage:`url(${profile})`}}></span>
                            <span className="user_id">crazy830727</span>
                            <span className="date">2022.04.18</span>
                        </div>
                    </div>
                    <div className="view_content">
                        <div className="desc">
                            <p>안녕하세요! 사회생활 15년차에 서비스 기획자로 12년을 달려온 직장인입니다. 그동안 많은 프로젝트에 참여하여 PM으로 PO로 리더로 근무를 했는데요.
                                돌이켜보면 기획자로서 전반기에 성취했던 결과나 만족을 후반기로 갈수록 체감하기가 어려워지는 것 같았습니다.
                                모든 것은 개인적인 책임에서 보면 제 역량부족이라는 생각이 들어 앞으로 어떤 자세로 일을 해야 할지 고민이 늘어만 가고 있습니다.
                                혹시 저와 같은 고민을 갖고 있는 분들은 이런 상황을 어떻게 대처하고 계신지 궁금하네요.
                                정답은 없지만 본인 환경에 맞춰 개인적인 대응이나 선택(퇴사, 전직, 전업, 역량강화 등)을 한다고 봤을때 같은 고민을 하는 분들의 이야기를 듣고 싶네요! :)</p>
                        </div>
                        <div className="view_state flex_b_c">
                            <div className="left">
                                <span className="good">1</span>
                                <span className="review">12</span>
                            </div>
                            <button type="button" className="etc_btn"></button>
                        </div>
                    </div>
                </article>
                <article className="comment_area">
                    <div className="write_comment">
                        <div className="daily_user_info">
                            <span className="user_ico" style={{backgroundImage:`url(${profile})`}}></span>
                            <span className="user_id">crazy830727</span>
                            <span className="date">2022.04.18</span>
                        </div>
                        <div className="input_wrap">
                            <textarea name="" id="" placeholder="내용을 입력해주세요."></textarea>
                            <Btn typeVal="submit" btnName={btnName1} text="등록"/>
                        </div>
                    </div>
                    <ul className="comment_list">
                        <li>
                            <div className="info_top">
                                <div className="daily_user_info">
                                    <span className="user_ico"
                                        style={{backgroundImage:`url(${profile})`}}></span>
                                    <span className="user_id">crazy830727</span>
                                    <span className="date">2022.04.18</span>
                                </div>
                                <button type="button" className="etc_btn"></button>
                            </div>
                            <div className="info_bot">
                                신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을 안했습니다.
                            </div>
                        </li>
                        <li>
                            <div className="info_top">
                                <div className="daily_user_info">
                                    <span className="user_ico"
                                        style={{backgroundImage:`url(${profile})`}}></span>
                                    <span className="user_id">crazy830727</span>
                                    <span className="date">2022.04.18</span>
                                </div>
                                <button type="button" className="etc_btn"></button>
                            </div>
                            <div className="info_bot">
                                신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을 안했습니다.
                            </div>
                        </li>
                    </ul>
                </article>

                <div className="btn_wrap flex_c_c">
                    <Btn btnName={btnName2} onEvent={goToList} text="목록으로"/>
                </div>
            </div>
        </section>
    </div>
    <Footer />
</>
)
}

export default DailyView