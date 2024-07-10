import React from 'react'
import HeaderPrincipal from '../../components/HeaderPrincipal/HeaderPrincipal'
import Soluctions from '../../components/Soluctions/Soluctions'
import Candidatura from '../../components/Candidatura/Candidatura'
import Perguntas from '../../components/Perguntas/Perguntas'
import Footer from '../../components/Footer/Footer'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <HeaderPrincipal/>
      <Soluctions/>
      <Candidatura/>
      <Perguntas/>
      <Footer/>
    </div>
  )
}

export default Home