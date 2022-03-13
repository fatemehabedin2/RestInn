import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyItem from '../components/PropertyItem'
import { useParams } from 'react-router-dom'


const PropertyTypePage = () => {
  
  const [typedProperties, setTypedProperties] = useState([
    {
    id:0,
    title: "",
    price: 0,
    location:"",
    type:"",
    isBestseller:false,
    img: null
    }]);

    const {type} = useParams()

    useEffect(()=>
    {
      let typedProperty;
      fetch(`http://localhost:5000/properties`)
        .then(response => response.json())
        .then(json => {
          typedProperty = json.filter((property)=> property.type===type)
          setTypedProperties(typedProperty);
        })
        .catch(err => {
          console.log(`Error ${err}`);
        }) 
    },[])

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main className="p-5">
      <h1 className="p-5"> {type}s: </h1>
        <div >
          {typedProperties.map(typedProperty => (<PropertyItem id={typedProperty.id} title={typedProperty.title} type={typedProperty.type} img={typedProperty.img} price={typedProperty.price} location={typedProperty.location} bestseller={typedProperty.isBestseller} />))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PropertyTypePage
