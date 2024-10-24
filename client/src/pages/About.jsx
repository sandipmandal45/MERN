import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'

const About = () => {
  const { user } = useAuth()
  return (
    <>
    <main>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">
            <p>Welcome,
              {user ? ` ${user.username} to our website` : ` to our website`}</p>
            <h1>Why Choose Us?</h1>
          
            <p>
              Customization: We understand that every business id unique.
              That's why we create solutions that are tailored to your 
              specific needs and goals.
            </p>
            <p>
              Customer-Centric Approch: We prioritize your satisfaction and 
              provide top-notch support to address your IT concerns.
            </p>
            <p>
              Scalability: Our solutions are designed to grow with your business, 
              ensuring that you're always ahead
            </p>
            <div className='btn btn-group'>
              <NavLink to="/contact">
      
              <button className='btn'>Connect Now</button>
              </NavLink>
              <button className='btn secondary-btn'>Learn More</button>
            </div>
          </div>
          <div className='hero-image'>
            <img 
            src="/image/home1.png" 
            alt="learn coding"
            width="400"
            height="500"
             />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default About
