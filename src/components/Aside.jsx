import React from "react";

import { Link } from "react-router-dom";


import asideImg1 from "@assets/img/main/aside_img01.png";
import asideImg2 from "@assets/img/main/aside_img02.png";
import asideImg3 from "@assets/img/main/aside_img03.png";
import asideImg4 from "@assets/img/main/aside_img04.png";
import asideImg5 from "@assets/img/main/aside_img05.png";
import asideImg6 from "@assets/img/main/aside_img06.png";
import asideImg7 from "@assets/img/main/aside_img07.png";
import asideImg8 from "@assets/img/main/aside_img08.png";

const AsideMenu = () => {
 
    return (
        <>
           <aside className="left ad_wrap">
    <Link to=""><img src={asideImg1} alt="통로펫살롱"/></Link>
    <Link to=""><img src={asideImg2} alt="저세상반값"/></Link>
    <Link to=""><img src={asideImg3} alt="싸개싸개 사시개"/></Link>
    <Link to=""><img src={asideImg4} alt="싸개싸개 사시개"/></Link>
</aside>
<aside className="right ad_wrap">
    <Link to=""><img src={asideImg5} alt="통로 댕댕이 보험"/></Link>
    <Link to=""><img src={asideImg6} alt="댕댕이옷 할인받자"/></Link>
    <Link to=""><img src={asideImg7} alt="봄엔 나랑같이 이뻐질래?"/></Link>
    <Link to=""><img src={asideImg8} alt="봄엔 나랑같이 이뻐질래?"/></Link>
</aside>
        </>
    )
}

export default AsideMenu