import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CarouselBanner from "./../Carousel";
function Home() {
  return (
    <div>
      <CarouselBanner />
      <p>Hello</p>
      {/* // <div className="container">
    // <div className="jumbotron text-center">
    //     <h1><i className="fa fa-fire"></i> Hot Restaurant</h1>
    //     <hr></hr>
    //     <h5>We only have 5 tables! Book your seat before they are all gone!</h5>
    //     <button type="button" className="btn btn-primary" >
    //       <Link className="nav-link" to="/Tables">View Tables</Link> <i className="fa fa-list-alt"></i></button>
    //     <button type="button" className="btn btn-danger">
    //     <Link className="nav-link" to="/Resevation">Make Reservation</Link> <i className="fa fa-id-card-o"></i></button>
    // </div>
    // </div> */}
    </div>
  );
}
export default Home;
