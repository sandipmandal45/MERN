import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const URL = "http://localhost:5000/api/auth/login"

const Login = () => {
const [user, setUser] = useState({
  email: "",
  password: "",
})

const navigate = useNavigate()
const {storeTokenInLS} = useAuth()

const handleInput = (e) => {
  let name = e.target.name
  let value = e.target.value

  setUser({
    ...user,
    [name]: value,
  })
}

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    console.log("login", response);
    

    if(response.ok){
      toast.success("Login Successful")
      const res_data = await response.json()
      //localStorage.setItem("token", res_data.token)
      storeTokenInLS(res_data.token)
      setUser({ email: "", password: "" })
      navigate("/")
    } else{
      toast.error("Invalid Cred")
      console.log("Invalid Cred");
      
    }

  } catch (error) {
    console.log(error);
    
  }
}
  return (
    <>
    <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/image/login.jpg"
                  alt="Trying to do login"
                  width="500"
                  height="500"
                />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
      
                  <div>
                    <label htmlFor="phone">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">LogIn</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login
