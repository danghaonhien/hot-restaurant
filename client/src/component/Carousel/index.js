import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselBanner() {
  return (
    <Carousel pause='hover' className='banner'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Welcome to Hot Restaurant</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Menu</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/26/18/lupins-delivery-food-indyeats.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Reservation</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselBanner;
