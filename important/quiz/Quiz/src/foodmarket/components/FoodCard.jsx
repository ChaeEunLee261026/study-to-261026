import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';

function FoodCard({food}){

  let navigate = useNavigate();

    return(
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food.imgPath} />
        <Card.Body>
          <Card.Title>{food.title}</Card.Title>
          <Card.Text>
            {food.content}
            {/* Some quick example text to build on the card title */}
            
          </Card.Text>
          <Card.Text>
            {food.price}
          </Card.Text>
          <Button variant="primary"
          onClick={()=>{
              navigate("/detail/" + food.id);
          }}>
            상세보기</Button> 
        </Card.Body>
      </Card>
    )
}

export default FoodCard;