import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead ">
              Sweet cart means 'Food of the Gods' in Greek, befitting our
              exclusive and indulgent range of offerings that include brownies,
              cakes, desserts, chocolates, breads and savouries. From our humble
              beginnings in 2004, when the first Theobroma pastry store opened
              its doors at the iconic Cusrow Baug at Colaba Causeway (Mumbai),
              we've grown to become a Pan-India chain of patisseries across
              Mumbai, Pune, Delhi NCR, Hyderabad and Bangalore. Our mission is
              to spread happiness by serving smiles on a plate, and this journey
              continues as we open Theobroma patisseries across the country.
            </p>

            <NavLink to="/contact" className="btn btn-outline-dark px-3 my-5">
              Contact Us
            </NavLink>
          </div>
         
          <div className="col-md-6 d-flex justify-content-center mt-5 py-4 ">
          <img
          src="https://media.istockphoto.com/photos/cokies-cakes-candys-picture-id999524864?k=20&m=999524864&s=612x612&w=0&h=dQDSAMGh9pl9LNaVElrua5_u3JzclJYq4-h6Hcc_4O0="
          alt="About Us"
          height='400px' width='400px'
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
