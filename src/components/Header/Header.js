import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({ currentSlide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = `${currentSlide === 1 && !isScrolled ? "active" : ""} ${
    isScrolled ? "scrolled" : ""
  } ${location.pathname === "/tintuc-sukien" ? "white-text" : ""}`;

  return (
    <header className="header-main">
      <div className="top-nav">
        <div className="contact padding-header">
          <a href="/">Liên hệ</a>
        </div>
        <div className="line"></div>
        <div className="hotline padding-header">
          <span>Hotline</span>
          <a href="/">18006068</a>
        </div>
        <div className="call">
          <span>Gọi nước bình 20 lít </span>
          <img
            src="https://www.vinhhao.com.vn/bitrix/templates/vinhhao_140617/img/bottle_top.png"
            alt="logo-water"
          />
        </div>
      </div>
      <div className={`navigation ${navClass}`}>
        <ul>
          <li>
            <Link
              to="/"
              style={{
                color: currentSlide === 1 && !isScrolled ? "white" : "",
              }}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/cau-chuyen-truyen-doi"
              style={{
                color: currentSlide === 1 && !isScrolled ? "white" : "",
              }}
            >
              Câu chuyện vĩnh hảo
            </Link>
          </li>

          <li className="logo">
            <a href="/">
              <img
                src="https://www.vinhhao.com.vn/bitrix/templates/vinhhao_140617/img/logo.png"
                alt="logo"
              ></img>
            </a>
          </li>
          <li>
            <Link
              to="/san-pham"
              style={{
                color: currentSlide === 1 && !isScrolled ? "white" : "",
              }}
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/tintuc-sukien"
              style={{
                color: currentSlide === 1 && !isScrolled ? "white" : "",
              }}
            >
              TIN TỨC & SỰ KIỆN
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
