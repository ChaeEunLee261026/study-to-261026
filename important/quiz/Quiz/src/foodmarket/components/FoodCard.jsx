import { Button, Card } from "react-bootstrap";

import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

function FoodCard(){

    return(
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
    )
}

export default FoodCard;