import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MDBBtn } from "mdbreact";

function CarouselBanner() {
  return (
    <Carousel interval='5000' pause='hover'>
      <Carousel.Item>
        <img
          src='https://adorable-home.com/wp-content/uploads/2016/03/Natural-Restaurant-Interior-Design-12.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Welcome to Hot Restaurant</h3>

          <MDBBtn
            href='/Reservation'
            color='dark'
            size='sm'
            className='buttonHomepage'
          >
            Reservations
          </MDBBtn>
          <MDBBtn
            href='/Tables'
            color='dark'
            size='sm'
            className='buttonHomepage'
          >
            Waiting List
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src='https://adorable-home.com/wp-content/uploads/2016/03/Natural-Restaurant-Interior-Design-10.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <MDBBtn
            href='/Menu'
            color='dark'
            size='sm'
            className='buttonHomepage'
          >
            Menu
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='https://adorable-home.com/wp-content/uploads/2016/03/Natural-Restaurant-Interior-Design-4.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <MDBBtn
            href='/Comments'
            color='dark'
            size='sm'
            className='buttonHomepage'
          >
            Feedback
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselBanner;
