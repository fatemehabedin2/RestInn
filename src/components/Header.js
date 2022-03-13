import React from 'react'
import {FaUserCheck} from "react-icons/fa";
import {FaSistrix} from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../assets/img/mei.jpg"



const Header = () => {
  return (

    <header>
       <nav className="navbar navbar-expand-sm navbar-light bg-success fs-4 ">
        <div className="container-xxl ">
          
              <Link className="navbar-brand" to={"/"}><img src={image1} alt="pic" />
                <span className="fw-bold text-dark p-3">
                  Rest-Inn
                </span>
              </Link>
            
              <form className="d-flex  ">
                <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit"><FaSistrix /></button>
              </form>
            
            <button className="navbar-toggler" type="button" data-bs-toggle= "collapse" data-bs-target="#main-nav"
            aria-aria-controls='main-nav' aria-expanded="false" aria-label='Toggle navigation'>
              <span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item p-3">
                  <Link className="nav-link active" aria-current="page" to={"/"}> Home</Link>
                </li>
  
                <li className="nav-item p-3">
                  <Link className="nav-link" to={"/propertylisting"}>Vacation properties</Link>
                </li>
  
                <li className="nav-item dropdown p-3">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaUserCheck />
                  </Link>
                  <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to={"/signup"}>Sign Up</Link></li>
                    <li><Link className="dropdown-item" to={"/login"}>Login</Link></li>
                  </ul>
                </li>
              </ul>
            </div> 
        </div>
      </nav> 
      
    </header>
  );
}

export default Header
