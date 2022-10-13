import React, { Fragment, useState } from "react";
import { Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import "./Contact.scss";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

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
      setError("Please fill in the all blank");
    } else if (name && email && comments) {
      setSuccess("Thank you for your inquiry.We will reply to you shortly. Please call us if you don't have a response from us within 48 hours. Thank you for your understanding.");
      setName("");
      setEmail("");
      setComments("");
    }
  };

  return (
    <Fragment>
      {/* Email & phone */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex align-items-center gap-3 mt-5">
          <AiFillPhone />
          <p className="mb-0">012-345-6789</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <MdEmail />
          <p className="mb-0">emboite.academia@hotmail.com</p>
        </div>
      </div>

      {/* Form */}
      <div className="contact d-flex justify-content-center align-items-start mt-5">
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
            <Alert
              variant="danger"
              className="mb-3 p-1 text-center msg"
              style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}
            >
              {error}
            </Alert>
          )}
          {success && !error && (
            <Alert
              variant="success"
              className="mb-3 p-1 msg"
              style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}
            >
              {success}
            </Alert>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Contact;
