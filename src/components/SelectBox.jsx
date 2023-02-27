import React from "react";

/**
 * 
 * @param {{data:[{id:number,name:string,data:[{id:number,name:string,value:number|string}],defaultValue:number|string,require:boolean,disable:boolean}]}} data 배열
 * @param data.id 일련번호
 * @param data.name select name 값
 * @param data.data select option 값들
 * @param data.data.id select option의 고정된 일련값[map.key용]
 * @param data.data.name select option의 txt
 * @param data.data.value select option의 value
 * @param data.defaultValue select 선택된 값
 * @param data.require select 필수선택
 * @param data.disable select option 중 표기값으로 선택불가 선택
 * @returns 출력
 */
const SearchSelectBox = ({ data }) => {
    return (
        <>
            {
                data.map(objs => {
                    return (
                        <div className="sel_box" key={objs.id}>
                            <select name={objs.name} id="" required={objs.require} defaultValue={objs.defaultValue}>
                                {objs.data.map(obj => {
                                    if (obj.id != 1) {
                                        objs.disable = false;
                                    }
                                    return (
                                        <option key={obj.id} value={obj.value} disabled={objs.disable} >{obj.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    )
                })
            }
        </>
    )
}

export { SearchSelectBox }