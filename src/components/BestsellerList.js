import React, {useState, useEffect} from 'react'
import BestsellrItem from './BestsellerItem';



const BestsellerList = () => {

  const [bestsellers, setBestsellers] = useState([
    {
    id:0,
    title: "",
    price: 0,
    location:"",
    img: null
    }]);


  useEffect(()=>
  {
    let bestsellerProperties;
    fetch("http://localhost:5000/properties")
      .then(response => response.json())
      .then(json => {
        bestsellerProperties= json.filter((property)=> property.isBestseller===true)
        setBestsellers(bestsellerProperties);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      }) 
  },[])


  return (
    <section id="section-app-list">
      <div className="container">

        <h1>Bestseller</h1>

        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {bestsellers.map(bestseller => (<BestsellrItem key = {bestseller.id} id = {bestseller.id} title = {bestseller.title} image = {bestseller.img} price = {bestseller.price} location ={bestseller.location}/>))}
          
        </div>
      </div>
    </section>
  );
}


export default BestsellerList
