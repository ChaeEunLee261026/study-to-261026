// 기본셋팅
import "./FoodMarket.css";


import banner_bg from './img/banner_bg.jpg';
import { Navbar,Nav, Container, Row, Col} from 'react-bootstrap';

import foodsData from "./data/foodsData";
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import CustomerService from "./pages/CustomerService";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function FoodMarket(){
let[foods, setFoods] = useState(foodsData);

let navigate = useNavigate();

// 상품 주문 처리 함수
function orderFood(id, orderCount) {

    setFoods(prevFoods => {

        return prevFoods.map(food => {

            if(food.id === id) {

                return {
                    ...food,
                    stockCount: food.stockCount - orderCount
                };

            }

            return food;

        });

    });

}



    return(
    <div>

    <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="#home">FoodMarket</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail") }}>FoodDetail(상세)</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/info") }}>Info</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/help") }}>고객센터</Nav.Link>
            
             {/* <Nav.Link><Link to="/info">고객센터</Link></Nav.Link> 
            <Nav.Link href="/help">고객센터</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

        {/* 이미지 사용(연결)
        html 연결 상대경로 연결
        img src=

        React방식
        상대폴더경로 링크로 연결x

        React 컴포넌트 방식에서 이미지 사용시
        1. import 이미지
        2. 외부 이미지 url경로 접속
        3. css에서 이미지 경로
        4. public폴더에 이미지르 ㄹ미리 저장해놓고 접근/사용
        현재 실행중인 서버에 public경로를 통해 image 접근 가능
        서버가 외부 url이미지에 접근하듯이 해당 서버 역할
        */}

{/* <img src={banner_bg}></img> */}


        <Routes>
          <Route path="/" element={<Home foods={foods}/>}/>
          <Route path="/help" element={<CustomerService/>}/>
          {/* <Route path="/detail/:id" element={<Detail foods={foods}/>}/> */}
<Route
    path="/detail/:id"
    element={
        <Detail
            foods={foods}
            orderFood={orderFood}
        />
    }
/>

          <Route path="/detail" element={<div><h1>Detail page</h1></div>}/>
          <Route path="/test" element={<div><h1>이곳은 테스트</h1></div>}/>
          <Route path="/*" element={<div><h1>잘못된 접근입니다. 경로를 확인하세요</h1></div>}/>
        </Routes>


    

    </div>
    
    )
    }

export default FoodMarket;