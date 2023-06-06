import React, {  useEffect, useState } from "react";
import { signupService } from "../services/SignUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export function Signup() {
  
  const [userDetail, setUserDetail] = useState({});
  const [showPassword,setShowPassword]=useState(false);
  const [verifyPassword,setverifyPassword]=useState("");
  const [error, setError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const navigate=useNavigate();
  const {dispatchAuth}=useAuth();

  const { firstName, lastName, email="", password="" } = userDetail
  const handleChange = (e) => {
      setUserDetail({
          ...userDetail,
          [e.target.name]: e.target.value,
      });
  };

  const handleSignup = () => {
      console.log("User Details:", userDetail)
      signupService(
          firstName,
          lastName,
          email,
          password,
          dispatchAuth
      )
      navigate("/profile")

  }
  const validateEmail = () => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (email!==""&&!emailRegex.test(email)) {
        setError('Please enter a valid email address');
      } else {
        setError('');
      }
    }

    const validatePassword = () => {
      if (password===verifyPassword) {
        setPasswordError('');
      } else {
        setPasswordError('Passwords do not match');
      }
    }
    useEffect(()=>{
      validateEmail();
      validatePassword();
  },[email,verifyPassword,password])


  return (
      <div>
          <div className="login-image">
              {/* <img src="https://images7.alphacoders.com/327/327601.jpg" alt="background" /> */}
          </div>
          <div className="signup-form">
          <h2 id="signup-heading">Signup</h2>
              <label className="input-label" > First Name
                  <input className="signup-input"
                      name="firstName"
                      onChange={handleChange}
                  />
              </label>
              <label className="input-label"> Last Name
                  <input className="signup-input"
                      name="lastName"
                      onChange={handleChange}
                  />
              </label>
              <label className="input-label"> Email
                  <input className="signup-input"
                      name="email"
                      onChange={handleChange}
                  />
              </label>
              <p id="signup-email-error">{error}</p>
              <label className="input-label"> Password
                  <input className="signup-input" type={showPassword?"":"password"}
                      name="password"
                      onChange={handleChange}
                  />
                  <p id="show-password"><button id="show-password-button" onClick={()=>setShowPassword(!showPassword)}>{showPassword? "Hide Password":"Show Password"}</button></p>
              </label>
              <label className="input-label"onChange={(e)=>setverifyPassword(e.target.value)}>Verify Password
                  <input className="signup-input"
                      name="password"
                  />
                  <p id="signup-email-error">{passwordError}</p>
              </label>
              <button className="signup-button"  onClick={() => handleSignup()}>Submit</button>
          </div>
      </div>
  )
  }
export default Signup
