import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyList from '../components/PropertyList'

const PropertyListingPage = () => {
  return (
    <div id="main-container">
      <Header />
      <main>           
        <div className='p-5'>
          <h1> PropertyListing: </h1>
          <PropertyList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PropertyListingPage
