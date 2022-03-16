
import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HOMEDECOR from "../../DecorData";


const Decor = () => {
  const cardItem = (item) =>{
       return(
        <Card className="card mb-5 py-5" key={item.id}  style={{ width: '18rem'}}>
        
        <Card.Img  variant="top" src={item.img}  />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <p className="lead ">₨-{item.price} </p>
          <NavLink to={`/decor/${item.id}`} className="btn btn-outline-primary">Buy now</NavLink>
        </Card.Body>
      </Card>
       )
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
           
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-around">
{HOMEDECOR.map(cardItem)}
        </div>
      </div>

    </div>
  );
};

export default Decor;
