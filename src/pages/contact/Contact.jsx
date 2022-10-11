import React, { useState } from "react";
import { Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    if (name === "" || email === "" || comments === "") {
      setError("Please fill in the blank");
    } else if (name && email && comments) {
      setSuccess("Thank you for your message. We will reply within 48 hours.");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>*Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
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
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </FloatingLabel>

        {error && !success && (
          <Alert variant="danger" className="mb-2 p-1 text-center msg">
            {error}
          </Alert>
        )}
        {success && !error && (
          <Alert variant="success" className="mb-2 p-1 text-center msg">
            {success}
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
