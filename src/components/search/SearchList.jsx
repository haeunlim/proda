import React from "react";
import { PageListing } from "@components/Pager";

const SearchList = () => {
    const tableObj = [
        {
            id: 1,
            objs1: '유월커뮤니케이션',
            objs2: "정상",
            objs3: 15197380,
            objs4: 15197380,
            objs5: 265,
            objs6: 916742550,
            objs7: 15326315,
            objs8: 1,
            objs9: 5350000,
            objs10: 128935,
            objs11: 0,
            objs12: '농협중앙회',
            objs13: '00511797704013',
            objs14: '브런치페이먼츠',
        },
    ]
    return (
        <>
            <div id="container">
                <h3 className="page_ttl">에이전트 정산</h3>
                <div className="bot_item">
                    <div className="bot_info">
                        <div className="left">총 10개</div>
                        <div className="right">
                            <button className="btn_st_02 red">에이전트 일정산실행 [선택]</button>
                            <button className="btn_st_02 blue">에이전트 일정산실행 [일괄]</button>
                        </div>
                    </div>
                    <div className="table_box">
                        <table>
                            <thead>
                                <tr className="total">
                                    <th colSpan="21">
                                        <span>- 일별 가맹점 정산을 완료하신 후에 작업 하시기 바랍니다. 가맹점 정산 완료된 거래건을 대상으로 처리됩니다.</span>
                                        <span>- 일별, 주별, 월별 정산타입에 따라 처리됩니다.</span>
                                    </th>
                                </tr>

                                <tr>
                                    <th rowSpan="2">
                                        <div className="check_box">
                                            <input type="checkbox" name="" id="num_all" />
                                            <label htmlFor="num_all"><span></span> NO</label>
                                        </div>
                                    </th>
                                    <th rowSpan="2">에이전트</th>
                                    <th rowSpan="2">결과</th>
                                    <th rowSpan="2">수수료정산</th>
                                    <th rowSpan="2">입금금액</th>

                                    <th colSpan="3" className="blue_bg th_top">정상금액</th>
                                    <th colSpan="3" className="red_bg th_top">차감금액</th>

                                    <th rowSpan="2">타행차감</th>
                                    <th rowSpan="2">은행</th>
                                    <th rowSpan="2">계좌번호</th>
                                    <th rowSpan="2">예금주</th>
                                </tr>
                                <tr>
                                    <th className="blue_bg left_line">건수</th>
                                    <th className="blue_bg">금액</th>
                                    <th className="blue_bg">수수료</th>

                                    <th className="red_bg">건수</th>
                                    <th className="red_bg">금액</th>
                                    <th className="red_bg">수수료</th>
                                </tr>

                            </thead>

                            <tbody>
                                {tableList(tableObj)}
                                <tr className="total">
                                    <td colSpan="3">TOTAL</td>
                                    <td>15,197,380</td>
                                    <td>15,197,380</td>
                                    <td>265</td>
                                    <td>916,742,550	</td>
                                    <td>15,326,315</td>
                                    <td>1</td>
                                    <td>5,350,000</td>
                                    <td>128,935</td>
                                    <td>0</td>
                                    <td colSpan="3"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <PageListing
                        curPage={1}
                        totalPage={10}
                        pageBtnNum={10}
                        url={""} />
                </div>
            </div>
        </>
    )

    /**
     * 
     * @param {[object]} data 리스트 데이터
     * @returns 
     */
    function tableList(data) {
        let pgData
        if (data.length > 0) {
            pgData = data;
        } else {
            pgData = 15;
        }
        return (
            <>
                {
                    data.length > 0 ?
                        pgData.map(obj => {
                            return (
                                <tr key={obj.id}>
                                    <td>
                                        <div className="check_box">
                                            <input type="checkbox" name="" id={`num_${obj.id}`} />
                                            <label htmlFor={`num_${obj.id}`}><span></span>{obj.id}</label>
                                        </div>
                                    </td>
                                    <td>{obj.objs1}</td>
                                    <td>{obj.objs2}</td>
                                    <td>{obj.objs3.toLocaleString('ko-KR')}</td>
                                    <td>{obj.objs4.toLocaleString('ko-KR')}</td>

                                    <td className="blue_bg">{obj.objs5.toLocaleString('ko-KR')}</td>
                                    <td className="blue_bg">{obj.objs6.toLocaleString('ko-KR')}</td>
                                    <td className="blue_bg">{obj.objs7.toLocaleString('ko-KR')}</td>

                                    <td className="red_bg">{obj.objs8.toLocaleString('ko-KR')}</td>
                                    <td className="red_bg">{obj.objs9.toLocaleString('ko-KR')}</td>
                                    <td className="red_bg">{obj.objs10.toLocaleString('ko-KR')}</td>

                                    <td>{obj.objs11.toLocaleString('ko-KR')}</td>
                                    <td>{obj.objs12}</td>
                                    <td>{obj.objs13}</td>
                                    <td>{obj.objs14}</td>
                                </tr>
                            )
                        })
                        : (
                            <tr>
                                <td colSpan={pgData}><strong className="no_data">NO DATA</strong></td>
                            </tr>
                        )
                }
            </>
        )
    }
}



export default SearchList