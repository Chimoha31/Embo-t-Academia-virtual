import React, { useState } from "react";
import { Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");

  // console.log(name);
  // console.log(email);
  // console.log(comments);

  const handleSubmit = (e) => {
    setSubmitMsg("");
    e.preventDefault();
    if (name === "" || email === "" || comments === "") {
      setSubmitMsg("Please fill in the blank");
    } else if (name && email && comments) {
      setSubmitMsg(
        "Thank you for your message. We will reply within 48 hours."
      );

      //reset!!!!!!!!!!!!!!!!!!!!
      setName("");
      setEmail("");
      setComments("");
    }
  };

  return (
    <div className="contact d-flex justify-content-center align-items-center">
      <Form className="d-flex flex-column form" onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>*Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>*Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* Comments */}
        <Form.Label>*Comments</Form.Label>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            className="comments"
            style={{ height: "300px" }}
            onChange={(e) => setComments(e.target.value)}
          />
        </FloatingLabel>

        {submitMsg && (
          <Alert
            variant={
              submitMsg === "Please fill in the blank" ? "danger" : "success"
            }
            className="mb-2 p-1 text-center"
          >
            {submitMsg}
          </Alert>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
