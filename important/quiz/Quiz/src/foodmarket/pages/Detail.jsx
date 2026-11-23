import { Container, Row, Col, Button, Modal  } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import'./Detail.css';


function Detail({foods, orderFood}){
/*
useEffect(실행할함수, 의존성배열)

useEffect(실행할함수, [] 빈배열) → 생성시에만 실행
useEffect(실행할함수) → 모든 로딩될때 실행(생성, update)
useEffect(실행할함수, [count]) → count 값이 바뀔때마다 실행
useEffect(실행할함수, [a,b,c]) → a,b,c 중에 하나라도 값이 바뀔때마다 실행

useEffect(실행할함수(){
return ()=>{ clean up function} → unmount시 실행할 함수
}, 의존성배열) 

*/

let[orderCount, setOrderCount] = useState(0); // 이 코드는 주문 수량을 관리하는 State
let[test, setTest] = useState(0);

useEffect(()=>{
    console.log("useEffect 함수 실행. (의존성 배열 없음)");
}) // 의존성 배열x → 매번 실행

useEffect(()=>{
    console.log("useEffect 함수 실행. [] 빈 의존성 배열 의존");
}, []) // 빈배열x → 생성/로딩시 1회 실행

useEffect(()=>{
    console.log("useEffect 함수 실행. [orderCount] : " + orderCount);
return()=>{
    console.log("useEffect 함수 실행. [orderCount] -> return () 함수 실행")
}

}, [orderCount]) //의존성 배열에 있는 orderCount 값 

useEffect(()=>{
    console.log("useEffect 함수 실행. [test] : " + test);
}, [test]) //

useEffect(()=>{
    console.log("useEffect 함수 실행. [test, orderCount] : " + test + ", " + orderCount);
}, [test, orderCount])


let[viewStatus, setViewStatus] = useState('');

useEffect(()=>{
    // setTimeout(함수, 시간); 일정시간 후에 작동하도록 타이머거는 함수
setTimeout(()=>{
setViewStatus('end');
}, 300); //0.3초 1000 : 1초

}, [])


let [modalShow, setModalShow] = useState(true); //모달창 표시여부 true | false

// 2초후에 Modal창 자동으로 닫기
useEffect(()=>{
// modalShow state변수값 true → false
setTimeout(()=>{
    setModalShow(false);
}, 2000); // 2초후 실행

}, [])

useEffect(()=>{
/* setTimeout 일정시간 후에 작동
   setInterval 일정시간마다 반복으로 실행
   비동기 방식

   clearTimeout
   clearInterval
*/ 

setInterval(() => {
    console.log('interval');
}, 1000); // 1초마다 실행
// clear up function

return()=>{
    clearInterval();
}

}, [orderCount])


    // 상세보기를 눌렀을때
    // 특정 상품의 상세정보를 보여주는 페이지

    // url 주소창 접속 경로   /detail/:id

    //  /detail/fd001    /detail/fd008

    // 상세보기를 누르면 -> /detail/id값 
    // id값으로 넘어온 값이 무엇이냐?  ---> foods 데이터 중에 id가 같은 상품 찾기

    // fd000 fd002   fd008 ???

    // :id 위치에 있는 값 접근
    let {id} = useParams();
    console.log(id);

    // id 하고 같은 id 가진 food 데이터 찾기

    // filter
    /* let food = foods.filter((food, index)=>{
        return food.id == id;
    }) */

    // find, findIndex
    let food = foods.find((food, index)=>{          //fd001    {}
        return food.id == id;
    })
    // food.title

    let foodIndex = foods.findIndex((food, index)=>{  //fd001    1
        return food.id == id;
    })

    // foods[foodIndex].title ;

    console.log(food);

    let navigate = useNavigate();

    // 해당id상품을 찾지 못했을 경우 필터징
    if(food == undefined || food == null){
        return(
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant='info' onClick={()=>{
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }


/*
스타일 적용

조건에 따라서 스타일 적용
가격표시
1만원 이상 → 빨간색 금액 표시
1만원 미만 → 파란색 금액 표시

1) js 객체 단위 관리
요소에 style 속성에는 js객체로 설정 가능

2) js 함수방식

3) css클래스 연계 사용

*/

// 1) js 객체 단위 관리
const priceTextStyle = {
    // key:vlue;
     color:food.price >= 10000 ? "red" : "blue"
}

// 2) js 함수방식
const priceTextStyleFunc = (price)=>{
    if(price >= 10000)
        return {color:"red"};
    else
        return {color:"blue"};
    // return {color : price >= 10000? "red" : "blue"};
}

// 3) css클래스 연계 사용
const priceTextClassName = (food.price >= 10000 ? "price-red" : "price-blue");

// 4) css클래스 + useState + useEffect 조합 → 효과발생

// 5) js객체로 내부에서 스타일 정의 및 사용





const styles = {
    redStyle : {color:'red'},
    blueStyle : {color:'blue'},

    fontBigBold : {
        fontSize:'36px',
        fontWeight:'bold'
    },

    titleStyle : {
        paddingTop : '30px',
        fontSize:'40px',
        fontWeight:'bold'
    }
}


    return (
        <Container className={"start" + "end"}>
            <Row>
                <Col md={6}>
                    <img src={ import.meta.env.BASE_URL + food.imgPath} style={ {width:'100%'} } />
                </Col>
                <Col md={6}>
                    <h4 style={styles.titleStyle}>{food.title}</h4>
                    <p style={styles.fontBigBold}>{food.content}</p>
                    <p style={priceTextStyle}>{food.price}</p>

                     <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

<p className={ food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
<p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')}>{food.price}</p>

<p className={ 'text-strong ' + priceTextClassName}>{food.price}</p>
<p className={ ['text-strong ' + priceTextClassName].join(" ")}>{food.price}</p>

<p className={ 'text-strong ${priceTextClassName}' }>{food.price}</p>
<p className={ 'text-strong ${(food.price >= 10000 ? "price-red" : "price-blue")}'}>{food.price}</p>




   {/* 재고 확인용 코드 */}
    <p>상품명 : {food.title}</p>
    <p>현재 재고 : {food.stockCount}</p>

                   <div>
    {/* <Button variant="dark" onClick={() => { 
        setOrderCount(orderCount-1);
    }}>-</Button> */}

    <Button variant="dark" onClick={() => {
    setOrderCount(prev => Math.max(0, prev - 1));
}}> - </Button>


    <span> {orderCount} </span>

   {/* <Button variant="dark" onClick={() => { 
        setOrderCount(orderCount+1);
        console.log('onClick() 함수에서 출력 : ' + orderCount);
    }}>+</Button> */}

<Button variant="dark" onClick={() => {
    setOrderCount(prev => Math.min(food.stockCount, prev + 1));
}}> + </Button>

{/* prev는 State의 이전 값을 의미 */}

</div>

{
    food.stockCount === 0 ?

        <Button variant="secondary" disabled>
            품절
        </Button>

        :

        <Button
            variant="primary"
            disabled={orderCount === 0}
            onClick={() => {

                orderFood(food.id, orderCount);

                alert(orderCount + "개 주문이 완료되었습니다.");

                setOrderCount(0);

            }}
        >
            주문하기
        </Button>
}
{/* 
food.stockCount > 0이면 주문하기 버튼 표시
food.stockCount === 0이면 품절 버튼 표시 */}

</Col>
</Row>


 <Modal
    show={modalShow}
    onHide={()=>{setModalShow(false); }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          어서오세요
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>우리 음식 좋습니다</h4>
        <p>
          많이 많이 담아서 구매해주세요~
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{setModalShow(false); }}>Close</Button>
      </Modal.Footer>
    </Modal>



        </Container>
    )


}

export default Detail;