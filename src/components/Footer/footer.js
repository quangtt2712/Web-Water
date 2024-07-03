import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-content">
        <div className="">©2017 Bản quyền của Masan Consumer</div>
        <div className="center-icon">Theo dõi chúng tôi tại
            <FacebookIcon  className="icon-fb"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
