import "./NewsBlog.css";
import { useState } from "react";
import Modal from "./Modal";



function NewsBlog() {
    let title = "Blog Header"

    let [news1, setNews1] = useState("어제의 뉴스");
    let [news2, setNews2] = useState("오늘의 뉴스");
    let [news3, setNews3] = useState("내일의 뉴스");

    let [news, setNews] = useState(["어제의 뉴스", "오늘의 뉴스", "내일의 뉴스"]);

    let [likeCount, setlikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <div className="black-nav">
                <h3>{title}</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>

            <div className="post-list">
                <h4 onclick={() => {
                   /* setModalFlag(true);

                    if (modalFlag)
                        setModalFlag(false);
                    else
                        setModalFlag(true);
                    setModalFlag(modalFlag ? false:true); */

                    setModalFlag( !modalFlag ); // !false → true    !true → false

                }}>{news[0]} <span onClick={(event)=>{

                    event.stopPropagation(); //이벤트 발생을 추가로 전파,전달하는것을 stop

                    setlikeCount(likeCount + 1);
                }}>♥</span> {likeCount}</h4>
                <p>내용</p>
            </div>


            <div className="post-list">
                <h4>제목</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>제목</h4>
                <p>내용</p>
            </div>


            {
                //   modalFlag == true? <Modal/> : null
                modalFlag && <Modal />
            }

        </div>

    )
}


export default NewsBlog;
