import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
  const { user, isAuthenticated} = useAuth0();
  return (
    
    <div class="container-contact">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.149570106511!2d77.16625467463491!3d28.655239883050655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d039181f45fc3%3A0x5881b7a95d58c9fc!2sEcommerce%20%7C%20Amazon%20Services%20%7C%20Payment%20Reco%20%7C%20Delhi%20%7C%20India%20%7C%20Patel%20Nagar!5e0!3m2!1sen!2sin!4v1686496857306!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <form>
      <label for="name">Name</label>
      <input className='contact-field' type="text" id="name" name="name" placeholder="Your name.." value={isAuthenticated?user.name:""}/>
  
  
      <label>Email</label>
      <input className='contact-field' type="email"  name="email" placeholder="Your Email Address.. " value={isAuthenticated?user.email:""}/>
      
  
      <label for="subject">Subject</label>
      <textarea className='contact-field' id="subject" name="subject" placeholder="Write something.." ></textarea>
      <input type="submit" value="Submit"/>
      </form>
  </div>
  )
}
export default Contact