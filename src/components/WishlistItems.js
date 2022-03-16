import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delItem, delItemFromWish } from '../redux/actions'

const WishlistItems = () => {

const state = useSelector((state)=> state.wishedItems)
console.log('wish products',state);
const dispatch = useDispatch()

const handleClose = (item) =>{
    dispatch(delItemFromWish(item))
}

const cartItems = (cartItem)=>{
    return (
        <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
        <div className='container py-4'>
            <button onClick={()=> handleClose(cartItem)} type="" className='btn-close float-end'></button>
            <div className='row justify-content-center'>
            <div className='col-md-4'>
                <img src={cartItem.img} alt={cartItem.title} height='200px' width='180px'/>
            </div>
                <div className='col-md-4'>
                    <h3>{cartItem.title}</h3>
                    <p className='lead fw-bold'>Rs {cartItem.price}</p>
                </div>
                
            </div>
        </div>
        </div>
    )
}

const emptyCart = () =>{
    return( 
        <div className='px-4 my-5 bg-light rounded-3 py-5' key={cartItems.id}>
        <div className='container py-4'>
        <div className='row'>
            <h3>Your cart is empty</h3>
        </div>
        </div>
        </div>

    )
}

const button = () =>{
    return (
    <div class="container">
             <div class="row">
                 <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to checkout</NavLink>
             </div>
         </div>
    )
}

  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map((cartItems))}
    {state.length !== 0 && button()}

    </>
  )
}

export default WishlistItems