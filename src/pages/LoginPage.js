import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const LoginPage = () => {
   const [email, setEmail] = useState("");   //initial value is empty string. Will change when the state is updated
   const [password, setPassword] = useState("");
   const [errorEmail, setErrorEmail] = useState("");
   const [errorPassword, setErrorPassword] = useState("");

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

      return isValid;
   }
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main className="container p-5">
        <br/>
        <br/>
        <h2>Sign in</h2>
        <form className="form-container">
          <div className="form-control-container">

            <label htmlFor="email"> Email address</label>
            
            <input className="form-control" type="text" id="title" value={email} onChange={(event) => {
              setEmail(event.target.value);
            }} />
            <span className="error">{errorEmail}</span>

          </div>

          <input type="checkbox" id="auto-signin" name="auto-signin" value="Bike"/>
          <label htmlFor="auto-signin"> Sign me in automatically next time</label>

          <div className="form-control-container">

            <label htmlFor="password"> Password</label>
            <input className="form-control" id="password" value={password} onChange={(event) => {
              setPassword(event.target.value);
            }}/>
            <span className="error">{errorPassword}</span>

          </div>
          <br/>
          <a>Forgot your password?</a>
          <br/><br/>
          <div className="form-control-container">
            <button className="btn btn-success" type="button" onClick={() => {
              if (validateForm()) {

                setErrorEmail("");
                setErrorPassword("");

                alert("form validated")                           
              // clear the title and description- clear the state after the movie is added
              setEmail("");
              setPassword("");
              }
            }}>Sign in</button>
            <br/> <br/>           
          <p>Don't have an account?<Link to={"/signup"}><span className='fw-bold mx-3'>Sign Up</span></Link></p>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage
