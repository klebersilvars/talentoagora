import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderPrincipal from '../../components/HeaderPrincipal/HeaderPrincipal'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <HeaderPrincipal/>
      <Footer/>
    </div>
  )
}

export default Home