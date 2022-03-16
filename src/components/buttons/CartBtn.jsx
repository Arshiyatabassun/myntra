import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import {useSelector} from 'react-redux'


const CartBtn = () => {
  const state = useSelector((state)=>state.addItems)
  console.log('statelength',state.length);

  return (
    <>
   <NavLink to='/cart' className='btn ms-1'>
   <i class="fa fa-cart-arrow-down"></i> ({state.length})
   </NavLink>
    
    </>
  )
}

export default CartBtn