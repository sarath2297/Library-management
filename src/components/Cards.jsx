import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({displayCard}) {

  // console.log("book",displaybook);
  // console.log(displaybookdet);
  console.log(displayCard.title);
  
  return (
    <div>
         <Card style={{ width: "15rem", marginTop:"2px" }}>
            <Card.Img variant="top" src={displayCard?.imageLink} style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>{displayCard?.title}</Card.Title>
              <Card.Text>
               <p>Author : {displayCard?.author}</p>
               <p>Genre : {displayCard?.genre}</p>
              </Card.Text>
              <Button variant="primary" className='me-2'>Take Book</Button>
              <Button variant="warning" className='ms-2'>Wishlist</Button>
            </Card.Body>
          </Card> 
    </div>
  )
}

export default Cards