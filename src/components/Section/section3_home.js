import React from "react";
import "./section3_home.css";
import nuoccam from "../../assets/nuoccam.jpg";
import bgcaptiongallery from "../../assets/bgcaption-gallery.jpg";
import bosungcanxi from "../../assets/bosungcanxi.jpg";
import nangnieutraitim from "../../assets/nangnieutraitim.jpg";
import lidobannenuongkhoangmoingay from "../../assets/7lidobannenuongkhoangmoingay.jpg";

const Section3_home = () => {
  return (
    <div className="gallery-productlisting">
      <div className="container layout-section3">
        <div className="gallery-w">
          <div className="caption-box">
            <a>
              <img src={bgcaptiongallery} alt="a"></img>
              <div></div>
            </a>
          </div>
          <div className="item p1">
            <a href="#">
              <img src={nuoccam} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p2">
            <a href="#">
              <img src={bosungcanxi} alt="canxi"></img>
            </a>
          </div>
          <div className="item p3">
            <a href="#">
              <img src={nangnieutraitim} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p4">
            <a href="#">
              <img src={lidobannenuongkhoangmoingay} alt="lynuocam"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3_home;
