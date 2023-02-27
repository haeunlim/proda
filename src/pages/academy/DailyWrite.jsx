import React from "react"

import { Link} from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Btn from "@components/buttons/Btn";

function goToList(){
    history.back(-1);
}

const DailyWrite = () => {
    const code = "academy";
    // const pageType = "write";

    const btnNames = { write:"btn bigBtn bg-point rounded-2 submitBtn",
    goList:"btn bigBtn rounded-2 goListBtn",
    more:"btn bigBtn moreBtn"
};

  
return (
<>
    <Header />
    <div id="container" className={`sub ${code}`}>
            <section className="write_sect">
                <div className="inner">
                    <div className="write_row half">
                        <select name="" id="">
                            <option value="">게시판을 선택해주세요</option>
                        </select>
                    </div>
                    <div className="write_box">
                        <div className="title">
                            <input type="text" placeholder="제목을 입력해주세요."/>
                        </div>
                        <div className="cont">
                            <textarea name="" id="" placeholder="내용을 입력해주세요."></textarea>
                        </div>
                        <div className="photo_count">
                            <div className="count_wrap">
                                <div className="ico"></div>
                                <p className="count_number">
                                    ( <span>0/1</span> )
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn_wrap flex_c_c">
                        <Btn typeVal="button" btnName={btnNames.goList} onEvent={goToList} text="뒤로가기"/>
                        <Btn typeVal="submit" btnName={btnNames.write} text="등록"/>
                    </div>
                </div>
            </section>  
        </div>
    <Footer />
</>
)
}

export default DailyWrite