import React from "react";
import CarouselBanner from "./../Carousel";
import Cards from "./../Cards";
function Home() {
  const currentTime = new Date().getHours();

  return (
    <div>
      <CarouselBanner />
      <h3 className='openClose'>
        {currentTime < 22
          ? "We are currently open!"
          : "We are currently closed!"}
      </h3>
      <Cards />
    </div>
  );
}
export default Home;
