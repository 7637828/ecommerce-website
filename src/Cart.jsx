import React, { useState } from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";
import {HiOutlinePlusSm  } from "react-icons/hi";
import {  HiOutlineMinusSm} from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";

import { useCartContext } from './context/cart_context';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart ,removeCart,clearCart,setDecrease,setIncrease} = useCartContext();
  const { user, isAuthenticated} = useAuth0();
  // const [amount,setamount] = useState();
  console.log(cart);

  let cartPrice = cart.map((Ele)=>{
    return Ele.price*Ele.amount;
  })
  console.log(cartPrice);


let sum = 0;
let totalSumPrice = cartPrice.map((Ele)=>{
  sum = sum+Ele
  return sum
})

let total = totalSumPrice[totalSumPrice.length-1]


// const setDecrease = (value) =>{
//   value>0?setamount(value-1):setamount(value)
// };

// const setIncrease = (value) =>{
//   amount<value?setamount(value+1):setamount(value)
// };


  if(cart.length === 0){
    return (
      <><div className='no-container'>
        <h2 className='no-cart'>NO CART ITEM</h2>
      </div>
      </>
    )
  }

  return (
    <div className='cart-container'>
     {
      isAuthenticated && (
      <div className='profile'>
        <div className='profile-container'>
        <img className='profile-img' src={user.picture} alt={user.name} />
        <h2 className='profile-name'>{user.name}</h2>
        <p className='profile-email'>{user.email}</p>
        </div>
       
      </div>
    )
     }
      <div className='cart-items'>
        <div className='cart-heading'>
          <div className='title'>ITEM</div>
          <div className='title'>PRICE</div>
          <div className='title'>QUANTITY</div>
          <div className='title'>SUBTOTAL</div>
          <div className='title'>REMOVE</div>
        </div>
        <hr></hr>
        
        {cart.map((Ele) => {
          return (
            <>
              <div className='cart-item'>
                <div className='item'>
                  <div className='product-img'>
                    <img src={Ele.image} alt=''></img>
                  </div>
                  <p className='img-name'>{Ele.name}</p>
                </div>
                <div className='item'>{Ele.price}</div>
                <div className='item'>
                  <button className="plus" onClick={()=>{setDecrease(Ele.id)}}><HiOutlineMinusSm></HiOutlineMinusSm></button>
                  <span className="cart-quantity">{Ele.amount}</span>
                  <button className="minus" onClick={()=>{setIncrease(Ele.id)}}><HiOutlinePlusSm></HiOutlinePlusSm></button>
                </div>
                <div className='item'>{Ele.price*Ele.amount}</div>
                <div className='item'><BsFillTrash3Fill className='trash' onClick={()=>{removeCart(Ele.id)}}></BsFillTrash3Fill></div>
              </div>
            </>
          )
        })}
      </div>
      <hr></hr>

      <div className='cart-button'>
        <NavLink to="/products">
        <button className="cart-btn">continue shopping</button>
        </NavLink>
        <NavLink>
        <button  className="cart-btn" onClick={clearCart}>clear cart</button>
        </NavLink>
      </div>
      <div className='total'>
        <div className='total-price'>
          <p>subtotal : <span>{total}</span></p>
          <p>sipping-charge : <span>500</span></p>
          <hr></hr>
          <p> order-total : <span>{total+500}</span></p>
          
        </div>
      </div>
    </div>
  )
}

export default Cart