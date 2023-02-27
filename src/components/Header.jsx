import React from "react";

import { Link, useLocation } from "react-router-dom";
import Meta from "@components/Meta";



function GnbList(props){
    const Links = []
    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        Links.push(  <li  key={t.id} className={`${location.pathname.includes('/'+ t.linkParent) ? 'active' : ''}`}><Link to={'/'+t.linkParent+'/'+t.link} >{t.title}</Link></li>)
    }

    return (<ul className="gnb_list">{Links}</ul>)
}




const Header = () => {
    const location = useLocation();
    const topics = [
        {id:1, title: "프로다소개", link:"about", linkParent:"about"},
        {id:2, title: "프로채용", link:"recruitment", linkParent:"recruitment"},
        {id:3, title: "프로검색", link:"search_list", linkParent:"search"},
        {id:4, title: "프로아카데미", link:"semina", linkParent:"academy"},
    ]


    const handleBtnClick = (e) => {
        const el = e.target;
        el.classList.toggle('on');
        const menu = document.querySelector(".all_menu_wrap");
        menu.classList.toggle("on");
    }

    window.onscroll = function() {
        if(location.pathname == '/main' ){

            HeaderActive()};
        }
    function HeaderActive(){
        var header = document.getElementById("header");
        if (window.pageYOffset > 0) {
            header.classList.add("bgWhite");
        } else {
            header.classList.remove("bgWhite");
        }
    }
return (
<>
    <Meta />

    <header id="header" className={`sub_menu ${location.pathname.includes('/main') ? "" : "bgWhite"}`}>
        <div className="inner">
            <h1 className="logo">
                <Link to="/"><span>p</span> 프로다</Link>
            </h1>
            <nav className="gnb">
             <GnbList topics={topics}/>
              
            </nav>
            <div className="right flex__c">
                <Link to="/login/login">로그인</Link>
                <Link to="/member/join_us">회원가입</Link>
                <button type="button" className="searchBtn"></button>
                <button type="button" className="only_mo ham_btn" onClick={handleBtnClick}></button>
            </div>
        </div>
        <div className="all_menu_wrap only_mo">
            <nav className="all_menu">
            <GnbList topics={topics}/>
            </nav>
        </div>
    </header>
</>

)
}

export default Header