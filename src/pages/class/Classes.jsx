import React from "react";
import { Card } from "react-bootstrap";
import "./Classes.scss";
import AllClasses from "../../data/AllClasses";

const Classes = () => {
  return (
    <div className="classes">
      {AllClasses.map((eachClass) => (
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
      ))}
    </div>
  );
};

export default Classes;
