import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slickcar = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
      };

  return (
    <div className='container my-5'>
        <Slider {...settings}>
      <div>
       <img src={require('./photo-1.jpeg')} className='img-fram'></img>
      </div>
      <div>
      <img src={require('./photo-2.jpeg')} className='img-fram'></img>
      </div>
      <div>
      <img src={require('./photo-3.jpeg')} className='img-fram'></img>
      </div>
      <div>
       <img src={require('./photo-1.jpeg')} className='img-fram'></img>
      </div>
      <div>
      <img src={require('./photo-2.jpeg')} className='img-fram'></img>
      </div>
      <div>
      <img src={require('./photo-3.jpeg')} className='img-fram'></img>
      </div>

    </Slider>
      
    </div>
  )
}

export default Slickcar
