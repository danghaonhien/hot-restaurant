import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12' className='mb-3'>
            <img
              src='https://c1.staticflickr.com/9/8389/8532747209_9ec4596e99_b.jpg'
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
              src='https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='6' className='mb-3'>
            <img
              src='https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg'
              className='img-fluid z-depth-1'
              alt=''
            />
          </MDBCol>
          <MDBCol md='6' className='mb-3'>
            <img
              src='https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg'
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
