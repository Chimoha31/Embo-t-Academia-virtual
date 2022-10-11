import React, { Fragment } from "react";
import "./Footer.scss";

const Footer = () => {
  const handleFB = () => {
    window.open("https://www.facebook.com/emboite/");
  }

  const handleIG = () => {
    window.open("https://www.instagram.com/emboite.academiavirtual/")
  }

  return (
    <Fragment>
      {/* <hr /> */}
      <div className="footer">
        <div className="sns">
          <i className="fab fa-facebook-square" onClick={handleFB}></i>
          <i className="fab fa-instagram" onClick={handleIG}></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p className="copyright">&copy; 2022 - Emboîté Academia virtual / All Rights Reserved</p>
      </div>
    </Fragment>
  );
};

export default Footer;
