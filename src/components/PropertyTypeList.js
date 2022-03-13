import React, {useState, useEffect} from 'react'
import PropertyTypeItems from './PropertyTypeItems';



const PropertyTypeList = () => {

  const [propertyTypes, setpropertyTypes] = useState([
    {
    id:0,
    title: "",
    img: null
    }]);

  useEffect(()=>
  {
    fetch("http://localhost:5000/propertyTypes")
      .then(response => response.json())
      .then(json => {
        setpropertyTypes(json);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      }) 
  },[])


  return (
    <section id="section-app-list">
      <div className="container">

        <h1>Property Type</h1>

        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

          {propertyTypes.map(PropertyType => (<PropertyTypeItems key = {PropertyType.id} id = {PropertyType.id} title = {PropertyType.title} image = {PropertyType.img}  />))}
        
        </div>
      </div>
    </section>
  );
}


export default PropertyTypeList
