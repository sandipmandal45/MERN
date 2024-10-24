import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}

export const Contact = () => {
const [contact, setContact] = useState(defaultContactFormData);
const [userData, setUserData] = useState(true)

const {user} =useAuth()

if(userData && user){
  setContact({
    username: user.username,
    email: user.email,
    message: "",
  })
  setUserData(false)
}
const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setContact({
    ...contact,
    [name]: value,
  });
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/form/contact", {
      method: "POST",
      headers:{
        'Content-Type': "application/json"
      },
      body: JSON.stringify(contact),
    })

    if(response.ok){
      setContact(defaultContactFormData)
      const data = await response.json()
      console.log(data);
      toast.success("Message send successfully")
      
    }
  } catch (error) {
    toast.error("Message not send")
    console.log(error);
    
  }
  
}
  return (
    <>
    <section className='section-contact'>
      <div className="contact-content container">
        <h1 className='main-heading'>Contact Us</h1>
      </div>
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/image/contact.jpg" alt="we ready to help" />
        </div>

        <section className='section-form'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input 
              type="text"
              name="username" 
              id="username" 
              autoComplete='off' 
              value={contact.username}
              onChange={handleInput}
              required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
              type="email"
              name="email" 
              id="email" 
              autoComplete='off' 
              value={contact.email}
              onChange={handleInput}
              required />
            </div>
            <div>
              <textarea 
              name="message" 
              id="message"
              autoComplete='off'
              value={contact.message}
              onChange={handleInput}
              required 
              cols="27" 
              rows="4"
              >Message</textarea>
            </div>

            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </section>
      </div>
    </section>
    </>
  )
}

export default Contact
 