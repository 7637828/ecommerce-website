import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiAlignJustify} from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import {CgMenu , CgClose} from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";

import { useCartContext } from '../context/cart_context';

const Navbar = () => {

    const[toggle,settoggle] = useState(true);
    const { loginWithRedirect ,logout,isAuthenticated} = useAuth0();
    const { cart} = useCartContext();
    const show = () =>{
        settoggle(!toggle);
    }
  return (
    <div className="menu">
                {/* <h2><span>T</span>hapa <span>T</span>echnical</h2> */}
                    {/* <img src='/ecommerce.jpg'></img> */}
            <div className={toggle?"menu-items show":"menu-items"}>
                <ol className="items">
                    <NavLink className="link" to="/" onClick={()=>settoggle(false)}>
                    Home</NavLink>
                    <NavLink className="link" to="/about"onClick={()=>settoggle(false)}>About</NavLink>
                    <NavLink  className="link" to="/contact"onClick={()=>settoggle(false)}>Contact</NavLink>
                    <NavLink  className="link" to="/products"onClick={()=>settoggle(false)}>Products</NavLink>
                    
                </ol>
            </div>
            <div>
            {isAuthenticated?<NavLink  className="link login" onClick={() => logout({returnTo: window.location.origin})}>Logout</NavLink>:<NavLink  className="link login" onClick={() => loginWithRedirect()}>Login</NavLink>}
            </div>
            <div>
            
            <NavLink  className="link" to="/cart"onClick={()=>settoggle(false)} ><FiShoppingCart className='cart'>
            </FiShoppingCart>
            <span className='total-item'>{cart.length}</span>
            
           </NavLink>
            </div>
            
            <div className="Hamburger" >

            <CgMenu name="menu-outline" className={toggle?"mobile-nav-icon close-outline":"mobile-nav-icon "}onClick={show}
            />
            <CgClose name="close-outline" className={toggle?"mobile-nav-icon ":"mobile-nav-icon close-outline "} onClick={show}/>
            
            </div>
        </div>
  )
}

export default Navbar