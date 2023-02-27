import React from "react";

import Footer from "@components/Footer";

const Main = () => {
    return (
        <>
            <div id="container">

                {/* <!-- item_box --> */}
                <div className="item_box">
                    <div className="button_box">
                        <button className="filter_btn"></button>
                    </div>

                    <div className="main_item_check">
                        <div className="sel_row">
                            <select name="" id="">
                                <option value="">(주)티디페이먼츠</option>
                            </select>
                        </div>
                        <ul className="main_cont_row">
                            <li className="complete">
                                <span></span>
                                <div>
                                    <span>결제완료</span>
                                    <b>105,657,800</b>
                                </div>
                            </li>
                            <li className="cancel ">
                                <span></span>
                                <div>
                                    <span>결제취소</span>
                                    <b>657,800</b>
                                </div>
                            </li>
                            <li className="refund">
                                <span></span>
                                <div>
                                    <span>환불</span>
                                    <b>657,800</b>
                                </div>
                            </li>
                            <li className="hold">
                                <span></span>
                                <div>
                                    <span>보류</span>
                                    <b>57,800</b>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="graph" >
                        <span style={{ backgroundColor: "#666", width: "100%", height: "260px", display: "block" }} >그래프 영역</span>
                    </div>


                </div>
                {/* <!-- // item_box // --> */}

                {/* <!-- item_box --> */}
                <div className="item_box">
                    <span style={{ width: "100%", height: "450px", display: "block" }} > 영역 입니다</span>
                </div>

                {/* <!-- item_box --> */}
                <div className="item_box">
                    <span style={{ width: "100%", height: "320px", display: "block" }} > 영역 입니다</span>
                </div>



                <Footer />


            </div>
        </>
    )
}

export default Main