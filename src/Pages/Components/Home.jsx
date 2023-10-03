import React from "react";
import "../Css/Home.css";
import Banner from "./Banner";
import Video from "./Video"
import Gallery from "./Gallery";
import Seller from "./Seller";
import Global from "./Global";
import Shopify from "./Shopify";
import Terms from "./Terms";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Video/>
      <Gallery/>
      <Seller/>
      <Global/>
      <Shopify/>
      <Terms/>
    </div>
  );
};

export default Home;
