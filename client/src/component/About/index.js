import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <Image
              src={require("./img_5349.jpg")}
              rounded
              className='aboutUs'
            />
          </Col>
          <Col xs={4}>
            <Image src={require("./123.jpg")} rounded className='aboutUs' />
          </Col>
          <Col xs={4}>
            <Image src={require("./profile.jpg")} rounded className='aboutUs' />
          </Col>
        </Row>
      </Container>
      <br />
      <h2> The Hot Crew</h2>
    </div>
  );
}

export default About;
