import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <div className='cardContainer'>
      <Container>
        <Row>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://www.cityofhope.org/image/veggies-fruits.jpg'
              />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://www.cityofhope.org/image/veggies-fruits.jpg'
              />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://www.cityofhope.org/image/veggies-fruits.jpg'
              />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://www.cityofhope.org/image/veggies-fruits.jpg'
              />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
