import React from "react";
import "../Css/Home.css";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="banner-main">
        <div className="banner-sub">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://uspoloassn.in/cdn/shop/files/TB2_9c0ce713-d388-412c-8084-7927409776b0_1944x.jpg?v=1695191002" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://uspoloassn.in/cdn/shop/files/13SEP23-USPA-FOOTWEAR-TB2-DSK_1944x.jpg?v=1695191002" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://uspoloassn.in/cdn/shop/files/13SEP23-USPA-ALL_LEGENDS-TB1-GL-DSK_2x_80532ba7-4a95-4308-9929-29f82912f730_1944x.jpg?v=1695191003" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="banner-2">
        <div className="banner-2-sub">
          <img
            src="https://uspoloassn.in/cdn/shop/files/13SEP23-THUMBNAIL-USPA-GL-DSK.jpg?v=1695191279"
            alt=""
          />
        </div>
      </div>
      <div className="gallary-main">
        <div className="gallary-sub">
          <div className="gallary-div">
            <Link to="/polo-shirts">
              <img
                src="https://uspoloassn.in/cdn/shop/files/13SEP23-POLOSHIRTS-TILE1_540x.jpg?v=1695191393"
                alt=""
              />
            </Link>
          </div>
          <div className="gallary-div">
            <Link to="/jeans">
              <img
                src="https://uspoloassn.in/cdn/shop/files/13SEP23-JEANS-TILE2_540x.jpg?v=1695191393"
                alt=""
              />
            </Link>
          </div>
          <div className="gallary-div">
            <Link to="/shirts">
              <img
                src="https://uspoloassn.in/cdn/shop/files/13SEP23-SHIRTS-TILE3_540x.jpg?v=1695191393"
                alt=""
              />
            </Link>
          </div>
          <div className="gallary-div">
            <Link to="/t-shirts">
              <img
                src="https://uspoloassn.in/cdn/shop/files/13SEP23-SHIRTS-TILE3-1_540x.jpg?v=1695191393"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="seller-main">
        <h1>BEST SELLERS</h1>
        <div className="seller-sub">
          <div>
            <div className="seller-box">
              <div className="seller-img">
                <img
                  src="https://uspoloassn.in/cdn/shop/files/4_6f700b9e-19cf-4911-8722-1c17c3cb65d8_540x.jpg?v=1692214793"
                  alt=""
                />
                <div className="img-text">
                  <div>
                    <h4>SALE</h4>
                  </div>
                  <div className="img-icon">
                    <AiOutlineHeart />
                    <AiOutlineShareAlt />
                  </div>
                </div>
              </div>
            </div>
            <div className="img-data">
              <h1>Heritage Tipped Polo Shirt</h1>
              <span>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
              <div className="img-price">
                <h3>$1,169</h3>
                <p>35% OFF</p>
              </div>
              <div className="size-button">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
