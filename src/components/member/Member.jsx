import React, { useState } from "react"
import { Link } from "react-router-dom"

import logo from "@assets/img/intro/logo.png";

const Member = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    return (
        <>
            <div className="intro bg03">
                <div className="login_box">
                    <form>
                        <div className="login_ttl">
                            <h1 className="logo">
                                <img src={logo} alt="" />
                            </h1>
                            <em>유월페이에 오신 것을 환영합니다.</em>
                        </div>
                        <div className="input_box">
                            <div className="input_wrap">
                                <input type="text" id="loginId" name="loginId" placeholder="아이디를 입력해주세요." onChange={() => { setUserId(e.target.value) }} />
                            </div>
                            <div className="input_wrap">
                                <input type="password" id="passwd" name="passwd" placeholder="비밀번호를 입력해주세요." onChange={() => { setUserPw(e.target.value) }} />
                            </div>
                        </div>
                        <div className="option_box">
                            <div className="check_box">
                                <input type="checkbox" id="save_id" name="save_id" value="Y" />
                                <label htmlFor="save_id">ID저장</label>
                            </div>

                        </div>
                        <div className="btn_wrap">
                            <Link to={"/siteAdmin/main"} className="login_btn" id="login">로그인</Link>
                        </div>

                        <div className="add_info">
                            <span>FAX : 02.3439.0773 / Email : uwal@uwal.co.kr</span>
                            <span>고객센터 : 02.3667.0774</span>
                        </div>
                        <p className="copyright">designed by uwal communication</p>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Member