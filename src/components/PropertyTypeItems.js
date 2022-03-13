import React from 'react'
import { Link } from "react-router-dom";


const PropertyTypeItems = (props) => {
  
  return (
    <div className="app-card">

      <Link to={`propertytypes/${props.title}`}>
        <img src={props.image} alt=""/>    
      </Link>

      <div className="appContent">
        <h3>{props.title}</h3>
      </div>

    </div>

  )
}

PropertyTypeItems.defaultProps=
{
  image : {},
  title : "Hotel",
  price : "$$$"
};


export default PropertyTypeItems
