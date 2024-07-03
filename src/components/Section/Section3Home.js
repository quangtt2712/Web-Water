import React from "react";
import "./section3_home.css";
import nuoccam from "../../assets/nuoccam.jpg";
import bosungcanxi from "../../assets/bosungcanxi.jpg";
import nangnieutraitim from "../../assets/nangnieutraitim.jpg";
import lidobannenuongkhoangmoingay from "../../assets/7lidobannenuongkhoangmoingay.jpg";
import nguonkhoangnaototchosuckhoe from "../../assets/nguonkhoangnaototchosuckhoe.jpg";
import khoangchatnguaungthu from "../../assets/khoangchatnguaungthu.jpg";
import dunsoinuocdenguoi from "../../assets/dunsoinuocdenguoi.jpg";
import bieuhiencothe from "../../assets/3bieuhiencothe.jpg";

const Section3_home = () => {
  return (
    <div className="gallery-productlisting">
      <div className="container layout-section3">
        <div className="gallery-w">
          <div className="caption-box">
            Bí quyết quyền năng
            <br />
            của khoáng
          </div>
          <div className="item p1">
            <a href="/">
              <img src={nuoccam} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p2">
            <a href="/">
              <img src={bosungcanxi} alt="canxi"></img>
            </a>
          </div>
          <div className="item p3">
            <a href="/">
              <img src={nangnieutraitim} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p4">
            <a href="/">
              <img src={lidobannenuongkhoangmoingay} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p5">
            <a href="/">
              <img src={nguonkhoangnaototchosuckhoe} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p6">
            <a href="/">
              <img src={khoangchatnguaungthu} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p7">
            <a href="/">
              <img src={dunsoinuocdenguoi} alt="lynuocam"></img>
            </a>
          </div>
          <div className="item p8">
            <a href="/">
              <img src={bieuhiencothe} alt="lynuocam"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="viewmore-box">
        <p>Xem thêm</p>
        <a href="/">BÍ QUYẾT QUYỀN NĂNG CỦA KHOÁNG</a>
      </div>
    </div>
  );
};

export default Section3_home;
