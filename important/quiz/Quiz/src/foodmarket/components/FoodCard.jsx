import { Button, Card } from "react-bootstrap";

import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';

function FoodCard({food}){

    return(
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food.imgPath} />
        <Card.Body>
          <Card.Title>{food.title}</Card.Title>
          <Card.Text>
            {food.content}
            {/* Some quick example text to build on the card title */}
            
          </Card.Text>
          <Button variant="primary">
            {/* Go somewhere */}
            {food.price}</Button> 
        </Card.Body>
      </Card>
    )
}

export default FoodCard;