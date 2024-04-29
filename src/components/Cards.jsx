import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <div>
         <Card style={{ width: "14rem", marginTop:"2px" }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/416OL7OEsWL.AC_SX250.jpg" style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Name of Book</Card.Title>
              <Card.Text>
               <p>Auther :</p>
               <p>Category :</p>
              </Card.Text>
              <Button variant="primary" >Take Book</Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default Cards