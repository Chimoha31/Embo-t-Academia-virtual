import React from "react";
import "./Review.scss";

const Review = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center review_ctn mt-5 p-2">
      <h2 className="text-center mb-5 aaaaa">NUESTROS ALUMNOSN</h2>
      {/* 1st review */}
      <div className="d-flex justify-content-center align-items-center text-center gap-3 mb-5 reviews">
        <div className="comments">
          <h5>An amazing instructor!</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea.
          </p>
        </div>
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="person"
          />
        </div>
      </div>
      {/* 2nd review */}
      <div className="d-flex justify-content-center align-items-center gap-3 text-center mb-5 reviews">
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
            alt="person"
          />
        </div>
        <div className="comments">
          <h5>an amazing instructor!</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea.
          </p>
        </div>
      </div>
      {/* 3rd review */}
      <div className="d-flex justify-content-center align-items-center gap-3 text-center mb-5 reviews">
        <div className="comments">
          <h5>an amazing instructor!</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea.
          </p>
        </div>
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="person"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
