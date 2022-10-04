import React from "react";
import InventoryItem from "../Inventory/InventoryItem/InventoryItem";
import NewArrivals from "../NewArrivals/NewArrivals";
import OurBlogs from "../OurBlogs/OurBlogs/OurBlogs";
import "./Home.css";
import img from '../../../images/banner/banner1.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className=""
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.679),rgba(0, 0, 0, 0.647)),url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop:"200px",
          paddingBottom:'200px'
        }}
      >
        <div className="container h-100">
          <h3 className="text-center banner-title">
            JACOB Dining Hansford-193 and Jellyroll-193 (6 Chair and 1
            Table)DINING TABLE
          </h3>
          <Link to='/allInventory' className="update-btn d-block mx-auto">Update</Link>
        </div>
      </div>
      <InventoryItem></InventoryItem>
      <NewArrivals></NewArrivals>
      <OurBlogs></OurBlogs>
    </div>
  );
};

export default Home;
