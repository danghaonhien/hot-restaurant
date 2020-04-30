import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12' className='mb-3'>
            <img
              src='https://www.myvenuefinder.com.au/wp-content/uploads/Untitled-design-41-Large.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg='4' md='12' className='mb-3'>
            <img
              src='https://www.goodfood.com.au/content/dam/images/h/1/3/6/1/v/image.related.socialLead.620x349.h137gu.png/1532998532934.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
          <MDBCol lg='4' md='6' className='mb-3'>
            <img
              src='https://www.goodfood.com.au/content/dam/images/h/1/2/q/a/8/image.related.articleLeadwide.620x349.h137gu.png/1543295930826.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
          <MDBCol lg='4' md='6' className='mb-3'>
            <img
              src='https://media-cdn.tripadvisor.com/media/photo-s/0a/73/a1/e3/roasted-masterstock-duck.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='6' className='mb-3'>
            <img
              src='https://blog.lemonpi.net/wp-content/uploads/2007/01/Quay-MurrayCod-WaterChestnuts-BeanCurd.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
          <MDBCol md='6' className='mb-3'>
            <img
              src='https://blog.lemonpi.net/wp-content/uploads/2007/01/Quay-ConfitPigBelly-Abalone-Tofu.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CarouselPage;
