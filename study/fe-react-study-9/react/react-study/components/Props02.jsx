import Box from "./Box";
import { useState } from "react";

function Props02() {

    let [titleArr, setTitleArr] = useState(["아침", "점심", "저녁"]);
    let [detailArr, setDetailArr] = useState(["졸리다", "배부르다", "피곤하다"]);

    return (
        <div>

            <button onClick={() => {

                /*
                버튼을 눌렀을 때
                야식 정보 추가
                */

                let temp = [...titleArr];
                temp.push("야식");
                setTitleArr(temp);

                let temp2 = [...detailArr];
                temp2.push("행복하다");
                setDetailArr(temp2);

                console.log(titleArr, detailArr);

            }}>
                야식추가버튼
            </button>

            {
                titleArr.map((value, index) => {
                    return (
                        <Box
                            title={value}
                            detail={detailArr[index]}
                            key={index}
                        />
                    )
                })
            }

        </div>
    );
}

export default Props02;