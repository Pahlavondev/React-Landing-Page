import React from "react";
import SmartWatches from "./JSON/SmartWatches.json";

const SmartWatch = () => {
  return (
    <div className="smartWatchWrapper">
      <div className="titlesWrapper">
        <p className="text-smartWatch">Explore Awesome Products</p>
        <h4 className="title-smartWatch">Recommended For You</h4>
      </div>

      <div className="cards">
        {SmartWatches.map((post, id) => {
          return (
            <div className="productCard" key={id}>
              <img src={post.img} alt="Watch" />
              <p>{post.name}</p>
              <div className="price">{post.price}</div>
            </div>
          );
        })}
      </div>

      <span className="buttonArea">
        <a className="exploreBtn" href="#">
          Explore Other Products
        </a>
      </span>
    </div>
  );
};

export default SmartWatch;
