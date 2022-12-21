import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IphoneImage from "../assets/iphones.png";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="main-left">
          <h3 className="main-title">Get the new iphone 12 pro</h3>
          <p className="main-text">
            A transformative triple-camera system that adds tons of capability
            without complexity
          </p>
          <div className="main-buttons">
            <a href="#" className="mainBtnBuy">
              Buy Now
              <ShoppingBasketIcon className="mainIcons" />
            </a>

            <a href="#" className="mainBtn">
              With $599 with trade-in
            </a>
          </div>
        </div>
        <div className="main-right">
          <img src={IphoneImage} alt="Iphones image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
