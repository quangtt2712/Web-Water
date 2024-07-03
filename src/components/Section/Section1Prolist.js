import React from "react";
import "./Section1Prolist.css";
import chai350ml from "../../assets/350ml.png";
import chai500ml from "../../assets/500ml.png";
import chai1600ml from "../../assets/1.6l.png";
import chai5l from "../../assets/5l.png";

const Section1Prolist = () => {
  return (
    <div className="section1_prolist section-top">
      <div className="container slider-list-item">
        <div className="title-main">Nước khoáng không ga tự nhiên</div>
        <div className="slider-product-listing">
          <div className="slider-product-listing-grid">
            <div className="product-list">
              <div className="img-w" style={{ paddingTop: "47px" }}>
                <img src={chai350ml} alt="water"></img>
              </div>
              <div>
                <p>350ml</p>
              </div>
            </div>
            <div className="product-list">
              <div className="img-w">
                <img src={chai500ml} alt="water"></img>
              </div>
              <div>
                <p>500ml</p>
              </div>
            </div>
            <div className="product-list">
              <div className="img-w">
                <img src={chai1600ml} alt="water"></img>
              </div>
              <div>
                <p>1.5l</p>
              </div>
            </div>
            <div className="product-list">
              <div className="img-w">
                <img src={chai5l} alt="water"></img>
              </div>
              <div>
                <p>5l</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title-opacity fix-untouch">Untouched water</div>
    </div>
  );
};

export default Section1Prolist;
