import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const option = {
  responsive:{
    0:{
      items: 1,
    },
    500:{
      items: 2,
    },
    900:{
      items: 3,
    }
  }
}



export default function CarouselOne() {
  return (
    <>
    <div className="imge-galery">
    <OwlCarousel className="owl-theme"  loop margin={10} nav {...option}>
        <div class="item">
          <img src={require('./photo-6.webp')} className="img-fluid"/>
        </div>
        <div class="item">
        <img src={require('./photo-9.avif')}  className="img-fluid"/>
        </div>
        <div class="item">
        <img src={require('./photo-1533450718592-29d45635f0a9.avif')}  className="img-fluid"/>
        </div>
        <div class="item">
        <img src={require('./photo-7.jpg')}  className="img-fluid"/>
        </div>
        <div class="item">
        <img src={require('./photo-10.avif')}  className="img-fluid"/>
        </div>
        <div class="item">
        <img src={require('./photo-12.avif')}  className="img-fluid"/>
        </div>
        <div class="item">
        <img src={require('./photo-11.avif')}  className="img-fluid"/>
        </div>
       
      </OwlCarousel>

    </div>
  
     
    </>
  );
}
