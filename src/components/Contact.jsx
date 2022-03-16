import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-12 text-center py-4 my-4'>
          <h1>Have Some Questions ?</h1>
          <hr/>

        </div>
      </div>
<div className='row'>
<div className='col-md-5 d-flex justify-content-center'>
  <img src="https://media.istockphoto.com/vectors/loudspeaker-solid-icon-megaphone-and-website-button-horn-vector-a-vector-id675712588?k=20&m=675712588&s=612x612&w=0&h=ssuOCgF4J6QvZTSFJdcCN3J6m_UlMFUhlmHVWIzPj3M="
  width='300px' height='300px' 
  alt=""/>
</div>

<div className='col-md-6'>
<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Full Name </Form.Label>
  <Form.Control type="text" placeholder="Chaitra" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email </Form.Label>
  <Form.Control type="email" placeholder="name@example.com" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Example textarea</Form.Label>
  <Form.Control as="textarea" rows={3} />
</Form.Group>
<button type='submit' className='btn btn-outline-dark'>Send Message</button>
</Form>
</div>
  
</div>

    </div>
    </div>
  )
}

export default Contact