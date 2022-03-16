import React from 'react'
import { NavLink } from 'react-router-dom'
import { GrFavorite} from 'react-icons/gr';
import {useSelector} from 'react-redux'


const WishBtn = () => {
  const state = useSelector((state)=>state.wishedItems)

  return (
    <>
   <NavLink to='/wish' className='btn ms-2'>
   <i class="fa fa-heart" style={{color:'red'}}></i>  ({state.length})
   </NavLink>
    </>
  )
}

export default WishBtn