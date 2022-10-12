import React from "react";
import "./CheckButtons.scss";
import { Link } from "react-router-dom";

const CheckButtons = () => {
  return (
    <div class="button_solid007 mt-3">
      <p>Check</p>
      <div className="d-flex justify-content-center gap-3">
        <div>
          <Link to="/classes">TODAS LAS CLASES</Link>
        </div>
        <div className="aaa">
          <Link to="#">SOLICITA INFORMES</Link>
        </div>
      </div>
    </div>
  );
};

export default CheckButtons;
