import React from "react";
import CheckButtons from "../../components/button/CheckButtons.";
import ClassAccordion from "../../components/classAccordion/ClassAccordion";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <ClassAccordion />
      <CheckButtons />
      <div style={{color: "#333"}}>
        <hr />
      </div>
      
    </div>
  );
};

export default Home;
