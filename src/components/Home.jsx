import { Card, Carousel, NavLink } from "react-bootstrap";
import React from "react";
import Product from "./Product";
import Cart from "./Cart";
import homeimg3 from "./Images/homeimg3.png";
import homeimg1 from "./Images/homeimg1.png";
import homeimg5 from "./Images/homeimg5.png";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={homeimg3}
            alt="SWEETS"
            height="600"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeimg1}
            alt="PASTRY"
            height="600"
          />
          <Carousel.Caption>
            <h3>PASTRY</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeimg5}
            alt="PASTRY"
            height="600"
          />
          <Carousel.Caption>
            <h3>COKKIES</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <div class="card" style={{width:"18rem"}}>
          <image class="card-img-top" src="../Images/m9.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
