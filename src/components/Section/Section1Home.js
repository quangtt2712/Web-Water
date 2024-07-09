import React, { useState } from "react";
import "./section1_home.css";

const Section1_home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const descriptions = [
    {
      title: "Bicarbonate",
      descriptions: "HCO",
      number: "3-",
      content: "Giúp giảm độ acid trong dạ dày, tốt cho hệ tiêu hóa.",
    },
    {
      title: "Calcium",
      descriptions: "CA",
      numberHeght: "(2+)",
      content: "Giúp cho xương cứng chắc và cơ bắp khỏe mạnh.",
    },
    {
      title: "Magie",
      descriptions: "Mg",
      numberHeght: "(2+)",

      content:
        "Có chức năng là chất xúc tác trong các phản ứng sinh hóa của cơ thể, góp phần làm giảm mệt mỏi và giải tỏa stress.",
    },
    {
      title: "Kali",
      descriptions: "K",
      relation: "+",
      content:
        "Góp phần duy trì hoạt động của hệ thần kinh và giúp duy trì huyết áp ổn định.",
    },
    {
      title: "Natri",
      descriptions: "Na",
      relation: "+",
      content:
        "Giúp cân bằng điện giải. Chất điện giải (bao gồm Bicarbonate, Clorua, Kali và Natri) giúp duy trì cân bằng acid-base và áp lực thẩm thấu của màng tế bào, ngăn ngừa mất nước bằng cách giúp các tế bào của cơ thể hấp thụ nước.",
    },
    {
      title: "Silicat",
      descriptions: "SiO",
      number: "3",
      sup: "(2-)",
      content:
        "Là nhân tố quan trọng cho quá trình tổng hợp collagen, giúp giảm lão hoá và tăng độ đàn hồi của làn da.",
    },
    {
      title: "Floride",
      descriptions: "F",
      relation: "-",
      content: "Góp phần duy trì khoáng hóa của răng.",
    },
  ];
  const currentDescription = descriptions[activeIndex];

  return (
    <section className="section1_home">
      <div className="container">
        <div className="gird-container">
          <div className="number-1">loại khoáng giúp bạn đẹp hơn mỗi ngày</div>
          <div className="number-2">
            <div className="tilte-number-2">
              {descriptions[activeIndex].title}
            </div>
            <div className="box-layout">
              <div className="name-khoang">
              {currentDescription.descriptions && (
                  <span>{currentDescription.descriptions}</span>
                )}
                {currentDescription.relation && (
                  <span>{currentDescription.relation}</span>
                )}
                {currentDescription.number && (
                  <sub>{currentDescription.number}</sub>
                )}
                {currentDescription.sup && (
                  <sup>{currentDescription.sup}</sup>
                )}
                {currentDescription.numberHeght && (
                  <sup>{currentDescription.numberHeght}</sup>
                )}
              </div>
              <div className="description-name-khoang">
                {descriptions[activeIndex].content}
              </div>
            </div>
          </div>
          <div className="number-3">
            {descriptions.map((_, index) => (
              <div
                key={index}
                className={`number-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <span>{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1_home;
