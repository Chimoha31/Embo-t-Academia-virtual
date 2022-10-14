import React from "react";
import { Card } from "react-bootstrap";
import "./Classes.scss";
import AllClasses from "../../data/AllClasses";

const Classes = () => {
  return (
    // <div className="classes">
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 mb-5">
      {AllClasses.map((eachClass) => (
        <Card style={{ width: "18rem" }} key={eachClass.id} className="shadow-lg">
          <Card.Img variant="top" src={eachClass.image} alt="class img" />
          <Card.Body>
            <Card.Title>{eachClass.className}</Card.Title>
            <Card.Text>
            {eachClass.description}
            </Card.Text>
            {/* <Button variant="primary">Detail</Button> */}
          </Card.Body>
        </Card>
      ))}
      {/* {AllClasses.map((eachClass) => (
        <Card key={eachClass.id} className="class_card">
          <Card.Header className="card_header">
            {eachClass.className}
          </Card.Header>
          <Card.Body className="d-flex card_body">
            <Card.Text>{eachClass.description}</Card.Text>
            <Card.Text>
              <img src={eachClass.image} alt="class" />
            </Card.Text>
          </Card.Body>
        </Card>
      ))} */}
    </div>
  );
};

export default Classes;
