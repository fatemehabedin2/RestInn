import React from 'react'
import { Link } from "react-router-dom";

const PropertyItem = ({id,title,price,type,location,isBestseller,img}) => {
  return (
    <div className=" border border-1 border-success rounded-3 my-2 wrapper">
      <div className="col-4 p-5 ">
        <Link to={`/propertylisting/${id}`}>
          <img src={img}  alt="" />
        </Link>
      </div>
      <div className="col-4 p-5 justify-content-center">
        <p><span class="fw-bold ">Property Name: </span>{title}</p>
        <p><span class="fw-bold">Location: </span>{location}</p>
        <p><span class="fw-bold">Property Type: </span>{type}</p>
      </div>
      <div className="col-4 p-5 ">
        <p><span class="fw-bold">price: </span>{`CAD ${price} per night`}</p>
        <p><span class="fw-bold">{isBestseller === true ? "Bestseller" : ""}</span></p>
        <Link to={`/propertylisting/${id}`}>
          <a class="btn btn-success" href="/orders" role="button">Detail</a>
        </Link>
      </div>
    </div>
   
  )
}

export default PropertyItem
