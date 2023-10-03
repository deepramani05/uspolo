import React from "react";
import "../Css/Home.css";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";

const Seller = () => {
  return (
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
  );
};

export default Seller;
