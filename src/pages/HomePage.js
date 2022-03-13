import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import BestsellerList from '../components/BestsellerList'
import PropertyTypeList from '../components/PropertyTypeList'

const HomePage = (props) => {
  return (
    <div id="main-container">
      <Header />
      <main>
        <div className='p-5'>
          <Hero />
          <BestsellerList />
          <PropertyTypeList/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage
