import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import DATA from '../Data';
import MENSDATA from '../Mendata';
import { addItem, delItem } from '../redux/actions';


const ProductDetail = () => {
     //   now we need a product id which is pass from the products page
     const [cartBtn, setCartBtn] = useState('Add to Cart')

     const dispatch = useDispatch()

     const proid = useParams();
    //  console.log('???',proid);
     const proDetail = MENSDATA.filter(x=>x.id == proid.id)
     const product = proDetail[0];
     console.log(product);
     
     const handleCart = (product) =>{
          if(cartBtn === 'Add to Cart'){
              dispatch(addItem(product))
              setCartBtn('Remove from Cart')
          }else{
            dispatch(delItem(product))

            setCartBtn('Add to Cart')

          }
     }



  return (
    <>
   <div className='container my-5 py-5'>
   <div className='row'>
       <div className='col-md-6 d-flex  justify-content-center mx-auto product'>
           <img src={product.img} alt={product.title} height='500px' width='480px' className='shadow-lg   rounded'/>
       </div>

       <div className='col-md-6 d-flex flex-column '>
           <h3 className='display-5 fw-bold'>{product.title}</h3>
           <hr/> 
           <h2 className=''>Rs {product.price}</h2>
           <p className='lead'>Sweet cart means 'Food of the Gods' in Greek, befitting our
           exclusive and indulgent range of offerings that include brownies,</p>
    <button className='btn btn-outline-primary my-3' onClick={()=>{handleCart(product)}}>{cartBtn}</button>
       </div>
   </div>
   </div>
    </>
  )
}

export default ProductDetail

