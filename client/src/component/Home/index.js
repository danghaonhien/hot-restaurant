import React from "react";
import CarouselBanner from "./../Carousel";
import Cards from "./../Cards";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
function Home() {
  const currentTime = new Date().getHours();

  return (
    <section>
      <CarouselBanner />

      <MDBContainer
        className='d-flex justify-content-center align-items-center'
        style={{ height: "100%", width: "100%" }}
      >
        <MDBRow>
          <MDBCol md='12' className='mb-4 white-text text-center'>
            <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
              HOT RESTAURANT
            </h1>
            <hr className='hr-light my-4' />
            <h5 className='text-uppercase mb-4 white-text '>
              <strong>Food | Wine</strong>
            </h5>

            <MDBBtn href='/About' outline color='white'>
              About Us
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Cards />
      <br />
      <h6 className='openClose'>
        {currentTime < 22
          ? "We are currently open!"
          : "We are currently closed!"}
      </h6>
      <br />
      <br />
    </section>
  );
}
export default Home;
