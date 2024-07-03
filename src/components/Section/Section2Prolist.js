import React from "react";
import "./Section2Prolist.css";
import binh20lit from "../../assets/binh20lit.png";
import binhup20l from "../../assets/binhup20l.png";
import dongchaivihawa from "../../assets/dongchaivihawa.png";
import binhupvihawa from "../../assets/binhupvihawa.png";

const Section2Prolist = () => {
  return (
    <div className="section2_prolist">
      <div className="container slider-list-item">
        <div className="title-main">Bình 20 lít</div>
        <div className="slider-product-listing">
          <div className="slider-product-listing-grid">
          <div className="product-list">
              <div className="img-w" >
                <img src={binh20lit} alt="water"></img>
              </div>
              <div>
                <p>20l</p>
                <div className="name">Vĩnh Hảo - Bình Vòi</div>
              </div>
            </div>
            <div className="product-list">
              <div className="img-w">
                <img src={binhup20l} alt="water"></img>
              </div>
              <div>
                <p>20l</p>
                <div className="name">Vĩnh Hảo - Bình Vòi</div>
              </div>
            </div>
            <div className="product-list">
              <div className="img-w">
                <img src={dongchaivihawa} alt="water"></img>
              </div>
              <div>
                <p>20l</p>
                <div className="name">Vĩnh Hảo - Bình Vòi</div>
              </div>
            </div>
            <div className="product-list">
              <div className="img-w">
                <img src={binhupvihawa} alt="water"></img>
              </div>
              <div>
                <p>20l</p>
                <div className="name">Vĩnh Hảo - Bình Vòi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title-opacity fix-puri">Purified water</div>
    </div>
  );
};

export default Section2Prolist;
