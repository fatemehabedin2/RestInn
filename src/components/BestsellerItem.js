import React from 'react'
import Image1 from "../assets/img/mei.jpg"
import { Link } from 'react-router-dom'



const BestsellrItem = ({id,image,title,price,location}) => {
  
  return (
    <div className="app-card">

      <Link to={`/propertylisting/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="appContent">
        <h3>{title}, {location} </h3>

        <p>${price} per night</p>

      </div>
    </div>
  )
}

BestsellrItem .defaultProps=
{
  image : {Image1},
  title : "Hotel",
  location:"",
  price : "$$$"
};


export default BestsellrItem 
