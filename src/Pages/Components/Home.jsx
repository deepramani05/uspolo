import React from "react";
import "../Css/Home.css";
import Banner from "./Banner";
import Video from "./Video"
import Gallery from "./Gallery";
import Seller from "./Seller";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Video/>
      <Gallery/>
      <Seller/>
    </div>
  );
};

export default Home;
