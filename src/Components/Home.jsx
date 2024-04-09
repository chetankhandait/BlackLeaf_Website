import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ProductList from './ProductList'
import ProductDescription from './ProductDescription'
import Stat from './Stat'
import CardDisplay from './CardDisplay'
import ContactForm from './ContactForm'
import LocationSection from './LocationSection'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="bg-black">
      {/* <h3 className="bg-blue-400 p-3">hi this chetan</h3> */}
      <Navbar />
      <Hero />
      <ProductList />
      <ProductDescription />
      <Stat />
      <CardDisplay />
      <ContactForm/>
      <LocationSection />
      
      <Footer />
    </div>
    </>
  )
}

export default Home
