import { Container, Row, Col} from 'react-bootstrap';
import FoodCard from '../components/FoodCard';
import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';

function Home({foods}){

    return(<div>

<div className="main-bg"></div>


<Container> 
  <Row>
    {
      foods.map((food, index)=>{
        return (
          <Col md={4} sm={4} xxl={3}>
            <FoodCard food={food}/>
          </Col>
        )
      })
    }

    {/* 첫 번째 카드 */}
    {/* <Col md={4} sm={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food1} />
        <Card.Body>
          <Card.Title>{foods[0].title}</Card.Title>
          <Card.Text>
            {foods[0].content} 
          </Card.Text>
          <Button variant="primary">
            {foods[0].price}</Button> 
        </Card.Body>
      </Card>
    </Col> */}

    {/* 두 번째 카드 */}
    {/* <Col md={4} sm={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food2} />
        <Card.Body>
          <Card.Title>{foods[1].title}</Card.Title>
          <Card.Text>
            {foods[1].content}
          </Card.Text>
          <Button variant="primary"> {foods[1].price}</Button> 
        </Card.Body>
      </Card>
    </Col> */}

    {/* 세 번째 카드 */}
   {/*  <Col md={4} sm={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food3} />
        <Card.Body>
          <Card.Title>{foods[2].title}</Card.Title>
          <Card.Text>
            {foods[2].content}  
          </Card.Text>
          <Button variant="primary">{foods[3].price}</Button>
        </Card.Body>
      </Card>
    </Col> */}

  </Row>
</Container> 


    </div>)

}

export default Home;