import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MDBBtn } from "mdbreact";
import { MDBContainer } from "mdbreact";
function CarouselBanner() {
  return (
    <MDBContainer fluid>
      <Carousel interval='5000' pause='hover'>
        <Carousel.Item>
          <img
            className=' d-block '
            src='https://www.ceres.org/sites/default/files/2019-01/fast-food-banner.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Welcome to Hot Restaurant</h3>

            <MDBBtn
              href='/Reservation'
              color='secondary'
              size='sm'
              className='buttonHomepage'
            >
              Reservations
            </MDBBtn>
            <MDBBtn
              href='/Tables'
              color='secondary'
              size='sm'
              className='buttonHomepage'
            >
              Waiting List
            </MDBBtn>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block'
            src='https://www.ceres.org/sites/default/files/2019-01/fast-food-banner.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <MDBBtn
              href='/Menu'
              color='secondary'
              size='sm'
              className='buttonHomepage'
            >
              Menu
            </MDBBtn>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block '
            src='https://www.ceres.org/sites/default/files/2019-01/fast-food-banner.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <MDBBtn
              href='/Comments'
              color='secondary'
              size='sm'
              className='buttonHomepage'
            >
              Contact Us
            </MDBBtn>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </MDBContainer>
  );
}
export default CarouselBanner;
