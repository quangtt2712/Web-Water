import React from "react";
import "./Section2New.css";
import new1 from "../../assets/new.jpg";
import new2 from "../../assets/event.jpg";

const Section2New = () => {
  return (
    <div className="section2_news row">
      <div className="container event-new">
        <div className="block1">
          <div className="title">Bài Viết mới nhất</div>
          <div className="new-event-sc">
            <div className="content-event">
              <img src={new1} alt="anhj"></img>
              <div className="overlay">
                <p>
                  Công bố sản phẩm: Nước uống đóng chai Vihawa - 049/MSC/2024 –
                  Thông báo lần 3
                </p>
              </div>
            </div>
            <div className="content-event">
              <img src={new1} alt="anhj"></img>
              <div className="overlay">
                <p>
                  Công bố sản phẩm: Nước uống đóng chai Vihawa - 049/MSC/2024 –
                  Thông báo lần 3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block2 ">
          <div className="title-tab">
            Tin tức<span className="line-new">|</span>Sự kiện
          </div>
          <div className="content-block">
            <div className="content-new">
              <img src={new2} alt="event" />
              <div className="overlay event-text">
                Vĩnh Hảo hân hạnh là nước khoáng của Hoa Hậu Việt Nam
              </div>
            </div>
            <div className="content-new">
              <img src={new2} alt="event" />
              <div className="overlay event-text">
                Vĩnh Hảo hân hạnh là nước khoáng của Hoa Hậu Việt Nam
              </div>
            </div>
            <div className="content-new">
              <img src={new2} alt="event" />
              <div className="overlay event-text">
                Vĩnh Hảo hân hạnh là nước khoáng của Hoa Hậu Việt Nam
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2New;
