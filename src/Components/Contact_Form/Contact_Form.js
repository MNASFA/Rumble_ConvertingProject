
import React from 'react';
import { RiFacebookBoxFill,RiInstagramFill } from "react-icons/ri";
import { FaLinkedin,FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const  ContactForm = () => {

  const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   console.log(conFom)
  // }
  return (
    <div className="container mt-5">
      <h2 className="mb-3 contactTitle">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input placeholder='Name' className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input placeholder='Email' className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea placeholder='Message' className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>

        <div className="Register">
            <span>If you d'ont have account !</span>
            <NavLink to='/Register' className='registerlink'>Register</NavLink>
        </div>
      </form>
    </div>
  )
}


const socialMediaIcons = () =>{
  <ul className="SocialIcons">
         
               
               <li><a href="#">
                   <FaLinkedin/>
                 </a></li>

                 <li><a href="#">
                   <FaTwitter/>
                 </a></li>

                 <li><a href="#">
                   <RiFacebookBoxFill/>
                 </a></li>

                 <li><a href="#">
                   <RiInstagramFill/>
                 </a></li>
  </ul>
}

export {
 socialMediaIcons
};
export default ContactForm;