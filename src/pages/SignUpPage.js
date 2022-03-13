import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SignUpPage = () => {
   const [email, setEmail] = useState("");   //initial value is empty string. Will change when the state is updated
   const [password, setPassword] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [errorEmail, setErrorEmail] = useState("");
   const [errorPassword, setErrorPassword] = useState("");
   const [errorfirstName, setErrorfirstName] = useState("");
   const [errorlastName, setErrorlastName] = useState("");

   const validateForm = ()=>{
      let isValid = true;

      if(email === "")
      {
        setErrorEmail("You must enter an Email")
        isValid = false;
      }
      else
      {
        setErrorEmail("") 
      }

      if(password === "")
      {
        setErrorPassword("You must enter a password")
        isValid = false;
      }
      else
      {
        setErrorPassword("") 
      }

      if(firstName === "")
      {
        setErrorfirstName("You must enter a first name")
        isValid = false;
      }
      else
      {
        setErrorfirstName("") 
      }

      if(lastName === "")
      {
        setErrorlastName("You must enter a last name")
        isValid = false;
      }
      else
      {
        setErrorlastName("") 
      }

      return isValid;
   }
  return (
    <div id="container">
      <Header />
      <main className="container p-5">
        <br/>
        <br/>               
        <h2>Sign up</h2>
        <form className="form-container">
          <div className="form-control-container">

            <label htmlFor="email"> Email address</label>
            <input className="form-control" type="text" id="email" value={email} onChange={(event) => {
              setEmail(event.target.value);
            }} />
            <span className="error">{errorEmail}</span>

          </div>

          
          <div className="form-control-container">

            <label htmlFor="Password"> Password</label>
            <input className="form-control" id="password" value={password} onChange={(event) => {
              setPassword(event.target.value);
            }}/>
            <span className="error">{errorPassword}</span>

          </div>
          <p>6-20 letters with at least 1 number</p>

          <div className="form-control-container">

            <label htmlFor="firstName"> First Name </label>
            
            <input className="form-control" type="text" id="firstName" value={firstName} onChange={(event) => {
              setFirstName(event.target.value);
            }} />
            <span className="error">{errorfirstName}</span>

          </div>

          <div className="form-control-container">

            <label htmlFor="lastName"> Last Name </label>
            <input className="form-control" type="text" id="lastName" value={lastName} onChange={(event) => {
              setLastName(event.target.value);
            }} />
            <span className="error">{errorlastName}</span>

          </div>

          <input type="checkbox" id="auto-signin" name="auto-signin" value="Bike"/>
          <label htmlFor="auto-signin"> Keep me signed in</label><br/>

          <input type="checkbox" id="auto-signin" name="auto-signin" value="Bike"/>
          <label htmlFor="auto-signin"> Email me exclusive coupons, deals and travel information</label>
          <br/><br/>

          <p>By signing in you accept the Terms and Conditions and Privacy Statement</p>


          <div className="form-control-container">
            <button className="btn btn-success" type="button" onClick={() => {
              if (validateForm()) {

                alert("form validated")

              // clear the title and description- clear the state after the movie is added
              setEmail("");
              setPassword("");
              setFirstName("");
              setLastName("");
              }

            }}>Create account</button>
          <br/>
          <br/>
          <p>Already have an account? <Link to={"/login"}><span className='fw-bold mx-3'>Sign In</span></Link> </p>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default SignUpPage

