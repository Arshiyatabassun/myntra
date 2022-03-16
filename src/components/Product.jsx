import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DATA from "../Data";
import MENSDATA from "../Mendata";
import SideBar from "./SideBar";

const Product = () => {
  const cardItem = (item) => {
    return (
      <Card className="card mb-5 py-5" key={item.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <p className="lead ">₨-{item.price} </p>
          <NavLink
            to={`/products/${item.id}`}
            className="btn btn-outline-primary"
          >
            Buy now
          </NavLink>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="">
      <div className="grrrid container-fluid py-5">
        <div className="">
          <SideBar />
        </div>
        <div className="row justify-content-around">
          {MENSDATA.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
