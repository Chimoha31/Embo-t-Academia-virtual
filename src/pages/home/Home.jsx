import React from "react";
import CheckButtons from "../../components/button/CheckButtons.";
import ClassAccordion from "../../components/classAccordion/ClassAccordion";
import Review from "../../components/review/Review";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <ClassAccordion />
      <CheckButtons />
      <div style={{ color: "#333" }}>
        <hr />
      </div>
      <Review />
    </div>
  );
};

export default Home;
