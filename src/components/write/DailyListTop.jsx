import React from 'react';
import profileImg from '@img/sub/profile_bg.jpg';



const DailyListTop = () => {

    return (<> 
    
            <div className="daily_write_top">
                <div className="profile_box">
                    <div className="profile" style={{backgroundImage:`url(${profileImg})`}}></div>
                </div>
                <div className="input_box">
                    <input type="text" placeholder="커리어와 라이프스타일에 대해 자유롭게 이야기 해주세요!"/>
                    <button className="write_btn"></button>
                </div>
            </div>
    
    </>)

}

export default DailyListTop;