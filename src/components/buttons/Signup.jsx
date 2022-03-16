import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const Signup = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
      <Button variant="outline-dark ms-2" onClick={handleShow}>
        
      Register
      </Button>
   <div tabIndex='-1'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIGNUP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="success w-100" type="submit" id="loginModel">
       <span className="fa fa-google me-2"></span>
        Sign up with Google
      </Button>

      <Button variant="dark w-100 mt-3" type="submit">
       <span className="fa fa-facebook me-2"></span>
        Sign up with Facebook
      </Button>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

    

  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
 
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="outline-dark " className="w-100 mt-3" type="submit">
    Register
  </Button>
</Form>
        </Modal.Body>
      </Modal>
      </div>      
      </>
  )
}

export default Signup