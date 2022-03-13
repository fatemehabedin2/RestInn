import PropertyItem from './PropertyItem'
import React, {useState, useEffect} from 'react'

const PropertyList = () => {

    const [properties, setproperties] = useState([
        {
        id:0,
        title: "",
        price: 0,
        location:"",
        type:"",
        isBestseller:false,
        img: null
        }]);
    
     
      useEffect(()=>
      {
        fetch("http://localhost:5000/properties")
          .then(response => response.json())
          .then(json => {
            setproperties(json);
          })
          .catch(err => {
            console.log(`Error ${err}`);
          }) 
      },[])
    
  return (
    <div>
      {properties.map(property => (<PropertyItem  id = {property.id} title = {property.title} type = {property.type} img = {property.img} price = {property.price} location ={property.location} isBestseller ={property.isBestseller}/>))}
    </div>
  )
}

export default PropertyList
