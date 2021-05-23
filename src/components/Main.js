import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductContainer from "./ProductContainer";

function Main() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="relative">
        <div className="absolute z-10 bottom-0 left-0 right-0 h-0 md:h-24 bg-gradient-to-t  from-gray-100 to-tranparent"></div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>

      <ProductContainer />
    </div>
  );
}

export default Main;
