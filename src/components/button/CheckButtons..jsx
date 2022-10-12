import React from "react";
import "./CheckButtons.scss";
import { Link } from "react-router-dom";

const CheckButtons = () => {
  return (
    <div class="check_button mt-3 mb-4">
      <p>Check</p>
      <div className="d-flex justify-content-center gap-3 check_ctn">
        <div className="first_check">
          <Link to="/classes">TODAS LAS CLASES</Link>
        </div>
        <div className="second_check">
          <Link to="#">SOLICITA INFORMES</Link>
        </div>
      </div>
    </div>
  );
};

export default CheckButtons;
