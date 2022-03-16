import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
      <span className="fa fa-sign-in me-2  "></span>  
      Login
      </Button>
   <div tabIndex='-1'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="success w-100" type="submit" id="loginModel">
       <span className="fa fa-google me-2"></span>
        Sign in with Google
      </Button>

      <Button variant="dark w-100 mt-3" type="submit">
       <span className="fa fa-facebook me-2"></span>
        Sign in with Facebook
      </Button>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="outline-dark" className="w-100" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
      </Modal>
      </div>

    </>
  );
};

export default Login;
