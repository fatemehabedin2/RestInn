import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PropertyDescriptionPage = () => {

  const [property, setProperty] = useState({
    id:0,
    title: "",
    description:"",
    price: 0,
    type:"",
    location:"",
    rules:"",
    amenities:"",
    isBestseller:false,
    img: null
  })

  const {id} = useParams()

  useEffect(()=>
  {
    fetch(`http://localhost:5000/properties/${id}`)
      .then(response => response.json())
      .then(json => {
        setProperty(json);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      }) 
  },[])


  return (
    
     <div className="grid grid-row-3" id="main-container">
      <Header />
      <div className="p-5 my-5">
        <main>
          <div className=" border border-1 border-success rounded-3 wrapperItem">
            <div >
              <img src={property.img} className="" alt="" />
            </div>
            <div className=" p-5 text-center">
              <p><span class="fw-bold">Property Name: </span>{property.title}</p>
              <p><span class="fw-bold">Location: </span>{property.location}</p>
              <p><span class="fw-bold">Property Type: </span>{property.type}</p>
              <p><span class="fw-bold">Property Description: </span>{property.description}</p>
              <p><span class="fw-bold">Property Rules: </span>{property.rules}</p>
              <p><span class="fw-bold">price: </span>{`CAD ${property.price} per night`}</p>
              <p><span class="fw-bold">{property.isBestseller === true ? "Bestseller" : ""}</span></p>
              <p><span class="fw-bold">Amenities: </span>{property.amenities}</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div> 
    
  )
}

export default PropertyDescriptionPage
