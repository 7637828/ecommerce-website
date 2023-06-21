import React from 'react'
import { FaTruck } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri"

const Services = () => {
  return (
    
    <div className='container'>
    <h1 className='services-heading'>Services</h1>
        <div className='grid grid-three-column'>
        
            <div className='servies1'>
                <FaTruck className='icons'></FaTruck>
                <p>Super Fast Delievery</p>
            </div>
            <div className='services2'>
                <div className='first'>
                <RiSecurePaymentLine className='icons'></RiSecurePaymentLine>
               
                    <p> Non-contact shipping</p>
                    
                </div>
                <div className='second'>
                <GiReceiveMoney className='icons'></GiReceiveMoney>
                    <p>Money back Guaranted</p>
                    
                </div>
            </div>
            <div className='services3'>
            <MdSecurity className='icons'></MdSecurity>
                <p>Super Secure Payment System</p>
                
            </div>
        </div>
    </div>
  )
}

export default Services