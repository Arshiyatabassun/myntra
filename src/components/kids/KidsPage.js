
import { Carousel } from "bootstrap";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import KIDSDATA from "../../Kidsdata";
import { wishlist } from "../../redux/actions";
// import AiOutlineHeart from 'react/icons/ai'

const KidsPage = () => {
    const dispatch = useDispatch()
    const wishList=useSelector(state=>state.wishReducer)
    
  const cardItem = (item) =>{
      // console.log('item',item);
       return(
        <Card className="card mb-5 py-3" key={item.id}  style={{ width: '18rem'}}>
        <Card.Img  variant="top" src={item.img}  />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <p className="lead ">₨-{item.price} </p>
          <NavLink to={`/kids/${item.id}`} className="btn btn-outline-primary ">Buy now</NavLink>
          <button className="btn btn-outline-primary ms-5" onClick={()=>dispatch(wishlist(item))} >wishlist </button>
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
{KIDSDATA.map(cardItem)}
        </div>
      </div>

    </div>
  );
};

export default KidsPage;
