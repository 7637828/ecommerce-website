import React from 'react'
import { FaDiscord,FaInstagram,FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <section className='footer-container'>
    <div className='fot-container grid grid-four-column bg'>
        {/* <div className='footer-about'>
            <h3 className='white'>Thapa technical</h3>
            <p className='white'>Lorem ipsum dolor, sit amet consecutor adipiing elit.</p>
        </div> */}
        <div className='footer-subscribe'>
            <h3 className='white'>Subscribe to get important updates</h3>
            <form action='#'>
                <input type="email" placeholder='your e-mail' autoComplete='off'></input>
                <input type="submit" value="subscribe"></input>
            </form>
        </div>
        <div className='footer-social'>
            <h3 className='white'>follow us</h3>
            <div className='footer-social-icons'>
                <div >
                    <FaDiscord className='icons white'></FaDiscord>
                </div>
                <div >
                    <FaInstagram className='icons white'></FaInstagram>
                </div>
                <div >
                    <FaYoutube className='icons white'></FaYoutube>
                </div>
        </div>
    </div>
    <div className='footer-contact'>
        <h3 className='white'>Contact Us</h3>
        <a href='tel:095768785'><p className='white'>+91 9876543210765</p></a>
    </div>
    
    </div>
    
    <div className='copy-right'>
    <div>
    <hr></hr>
    </div>
       <p className='white '>copyright@{new Date().getFullYear()} term & conditions</p>
    </div>
    </section>
    
   
    </>
    
    

  )
}

export default Footer