// 기본셋팅
import "./FoodMarket.css";

import { Container, Nav, Navbar, Spinner, Button, Row, Col, Card } from 'react-bootstrap';
import banner_bg from './img/banner_bg.jpg';

import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

import foodsData from "./data/foodsData";
import { useState } from "react";


function FoodMarket(){
let[foods, setFoods] = useState(foodsData);



    return(
    <div>

<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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

<div className="main-bg"></div>


<Container> 
  <Row>

    {/* 첫 번째 카드 */}
    <Col md={4} sm={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food1} />
        <Card.Body>
          <Card.Title>{foods[0].title}</Card.Title>
          <Card.Text>
            {foods[0].content}
            {/* Some quick example text to build on the card title */}
            
          </Card.Text>
          <Button variant="primary">
            {/* Go somewhere */}
            {foods[0].price}</Button> 
        </Card.Body>
      </Card>
    </Col>

    {/* 두 번째 카드 */}
    <Col md={4} sm={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food2} />
        <Card.Body>
          <Card.Title>{foods[1].title}</Card.Title>
          <Card.Text>
            {foods[1].content}
            {/* Some quick example text to build on the card title */}
          </Card.Text>
          <Button variant="primary"> {foods[1].price}</Button> 
            {/* Go somewhere*/}
        </Card.Body>
      </Card>
    </Col>

    {/* 세 번째 카드 */}
    <Col md={4} sm={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food3} />
        <Card.Body>
          <Card.Title>{foods[2].title}</Card.Title>
          <Card.Text>
            {foods[2].content}
            {/* Some quick example text to build on the card title */}
          </Card.Text>
          <Button variant="primary">{foods[3].price}</Button>
            {/* Go somewhere */}
        </Card.Body>
      </Card>
    </Col>

  </Row>
</Container> 



    

    </div>
    
    )
    }

export default FoodMarket;