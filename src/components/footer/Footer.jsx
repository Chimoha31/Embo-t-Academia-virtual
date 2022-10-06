import React, { Fragment } from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <Fragment>
      {/* <hr /> */}
      <div className="footer">
        <div className="sns">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p>&copy; 2022 - Emboîté Academia virtual / All Rights Reserved</p>
      </div>
    </Fragment>
  );
};

export default Footer;
