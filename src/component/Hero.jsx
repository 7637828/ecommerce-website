import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to</p>
                <h1>Ecommerce Store</h1>
                <p>Lorem ipsm dolor sit amet consecteur adipiing elit. Molestias atque temporibus venium libero a error omnius voluptates animi! Suscipit sapiente.</p>
                <NavLink to="/products">
                    <button className="btn">Show Now</button>
                </NavLink>
             </div>
        <div className="hero-section-image">
            <figure>
                <img src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='img-style'></img>
            </figure>
        </div>
    </div>
        
    </div>
  )
}

export default Hero