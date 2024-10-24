import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset success message and errors before submission
    setSuccessMessage("");
    setErrors({});
  
    try {
      // Make the API request to register the user
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const result = await response.json(); // Parse the response body once
      console.log("Response status:", response.status);
      console.log("Response body:", result);
  
      if (response.ok) {
        storeTokenInLS(result.token); // Use the parsed result here
        setUser({ username: "", email: "", phone: "", password: "" });
  
        // Set success message
        setSuccessMessage("Registration successful!");
        
        // Show success alert
        toast.success("Registration successful!");
  
        navigate("/login");
      } else {
        // Handle any error responses here (e.g., validation errors from the server)
        setErrors(result.errors || { general: "Registration failed" });
  
        // Show error alert
        toast.error("Registration failed: " + (result.message || "Please try again."));
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Registration error:", error);
      setErrors({ general: "An unexpected error occurred. Please try again." });
  
      // Show unexpected error alert
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  
  
  
  
  

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/image/register.webp"
                  alt="Trying to do registration"
                  width="500"
                  height="500"
                />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
                {errors.general && (
                  <p className="error-message">{errors.general}</p>
                )}

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                    {errors.username && (
                      <p className="error-message">{errors.username}</p>
                    )}
                  </div>
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
                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                    {errors.phone && (
                      <p className="error-message">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
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
                    {errors.password && (
                      <p className="error-message">{errors.password}</p>
                    )}
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;


