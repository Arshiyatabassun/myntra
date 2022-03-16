import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import Product from "./Product";
import Logo from './Images/Logo.png'
import WishBtn from "./buttons/WishBtn";

const Header = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className='container-fluid py-2'>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
          <NavLink className="nav-link fw-bolder" to="/">

          <li className="nav-item active me-5">
          <img
          className="d-block w-100"
          src={Logo}
          alt="PASTRY"
          height="50px"
          width='50px'
          />
          </li>
        </NavLink>
         
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder" to="/products">
                MEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder" to="/women">
                WOMEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder" to="/kids">
                KIDS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder" to="/decor">
                HOME & LIVING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder" to="/beauty">
                BEAUTY
              </NavLink>
            </li>
          </ul>
        </div>

        <Login/>
        <Signup/>
        <WishBtn/>
        <CartBtn/>
        
        </div>
      </nav>
    </div>
  );
};

export default Header;

// <form className="form-inline my-2 my-lg-0">
          //   <input
          //     className="form-control mr-sm-2"
          //     type="search"
          //     placeholder="Search"
          //     aria-label="Search"
          //   />
          //   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          //     Search
          //   </button>
          // </form>

        //   <li className="nav-item">
        //   <NavLink className="nav-link fw-bolder" to="/about">
        //     About
        //   </NavLink>
        // </li>
        // <li className="nav-item">
        //   <NavLink className="nav-link fw-bolder" to="/contact">
        //     Contact
        //   </NavLink>
        // </li> 