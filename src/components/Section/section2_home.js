import React from "react";
import "./section2_home.css";
import binh20lit from "../../assets/binh20lit.png";
import binhdongchai from "../../assets/binhdongchai.png";
import dongchaivihawa from "../../assets/dongchaivihawa.png";
import nuocgiaikhatchuakhoang from "../../assets/nuocgiaikhatchuakhoang.png";
const Section2_home = () => {
  return (
    <div className="section2_home">
      <div className="container">
        <div class="equal-grid-container">
          <div class="equal-grid-item">
            <div className="img-w">
              <img src={binh20lit} alt="binhnuoc"></img>
            </div>
            <div className="name-water-item">Vĩnh Hảo - Bình Vòi</div>
          </div>
          <div class="equal-grid-item">
            <div className="img-w">
              <img src={binhdongchai} alt="binhnuoc"></img>
            </div>
            <div className="name-water-item">Nước khoáng không ga tự nhiên</div>
          </div>
          <div class="equal-grid-item">
            <div className="img-w">
              <img src={dongchaivihawa} alt="binhnuoc"></img>
            </div>
            <div className="name-water-item">Vihawa - Bình Vòi</div>
          </div>
          <div class="equal-grid-item">
            <div className="img-w">
              <img src={nuocgiaikhatchuakhoang} alt="binhnuoc"></img>
            </div>
            <div className="name-water-item">Lemona khoáng chanh</div>
          </div>
        </div>
        
      </div>
      <div className="title-opacity">
                Untouched water
      </div>
      <div className="viewmore-box">
            <p>Xem thêm</p>
            <a href="#">tất cả sản phẩm vĩnh hảo</a>
        </div>
    </div>
  );
};
export default Section2_home;
