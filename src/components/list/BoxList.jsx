import React from "react"
import { Link } from "react-router-dom";

import daily01 from "@img/sub/daily_list01.jpg";
import daily02 from "@img/sub/daily_list02.jpg";
import daily03 from "@img/sub/daily_list03.jpg";
import userIco01 from "@img/sub/userIco01.jpg";
import userIco02 from "@img/sub/userIco02.jpg";
import userIcoDefault from "@img/sub/userIco_default.jpg";


function List(props){
   
    
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
      
        lis.push( 
            <li key={t.id}>
                    <div className="daily_user_info">
                        <span className="user_ico" style={{backgroundImage: `url(${t.userIcon == "" ? userIcoDefault : t.userIcon})`}}></span>
                        <span className="user_id">{t.userId}</span>
                        <span className="date">{t.date}</span>
                    </div>
                    <div className="content">
                        <div className="txt_box">
                            <Link to="/academy/daily_view" className="subject">{t.subj}</Link>
                            <p className="desc">
                                {t.desc}
                            </p>
                        </div>
                        <div className="img_box">
                            <div className="img_thumb" style={{backgroundImage:`url(${t.dailyImg})`}} ></div>
                        </div>
                    </div>
                    <div className="bot">
                        <span className="good">{t.goodNum}</span>
                        <span className="review">{t.commentNum}</span>
                    </div>
                </li>
            )

            
    }
    
    return (
        <>
          <ul className="boxList">
             {lis}
            </ul>
        </>
    )
}

const BoxList = (category) => {
    const dailyList = [

     
        {id:1, userIcon: userIco01, userId:"craz7830727", date:"2022.04.18", subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지", desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...", dailyImg:daily01, goodNum: 1, commentNum: 12},
        {id:2, userIcon: "", userId:"craz7830727", date:"2022.04.18", subj: "대기업에서 발령받고 3일만에 퇴사했습니다....", desc: "대기업이라고 좋아했는데 생각보다 처우가 좋지 않더라구요. 그래서 그냥 3일만에 사직서 올리고 퇴사했습니다. ", dailyImg:"", goodNum: 1, commentNum: 12},
        {id:3, userIcon: userIco02, userId:"craz7830727", date:"2022.04.18", subj: "이거 이렇게 하는게 맞는건지 모르겟네 ㅎㅎ", desc: "안녕하세요! 프로다에 처음 가입해봤어요~~ ㅎㅎㅎㅎ 앞으로 잘 부탁해용", dailyImg:"", goodNum: 1, commentNum: 12},
        {id:4, userIcon: "", userId:"craz7830727", date:"2022.04.18", subj: "집에서 상추 키우기 어떠세요? 씨앗은 저희가 드릴께요", desc: "집에서 상추 키우기 어떠세요? 씨앗은 저희가 드릴께요", dailyImg:daily02, goodNum: 1, commentNum: 12},
        {id:5, userIcon: "", userId:"craz7830727", date:"2022.04.18", subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지", desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...", dailyImg:"", goodNum: 1, commentNum: 12},
        {id:6, userIcon: "", userId:"craz7830727", date:"2022.04.18", subj: "대기업에서 발령받고 3일만에 퇴사했습니다....", desc: "집에 돌아오는 길에  참 여러가지 생각이 들더군요.부모님께는 뭐라고 말씀드려야 할지 벌써 답답합니다.  ", dailyImg:daily03, goodNum: 1, commentNum: 12},
        {id:7, userIcon: "", userId:"craz7830727", date:"2022.04.18", subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지", desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...", dailyImg:"", goodNum: 1, commentNum: 12},
        {id:8, userIcon: "", userId:"craz7830727", date:"2022.04.18", subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지", desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...", dailyImg:"", goodNum: 1, commentNum: 12},
    ]
    
    return (
        <>

            {category = "daily" ? <List topics={dailyList}/> : ""}
            <div className="btn_wrap flex_c_c"><button type="button" className="btn bigBtn moreBtn">더보기</button></div>
        </>
    )
}

export default BoxList