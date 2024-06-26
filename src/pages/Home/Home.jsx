import React from 'react'
import Header from '../../components/Header/Header'
import Soluctions from '../../components/Soluctions/Soluctions'
import Candidatura from '../../components/Candidatura/Candidatura'
import Perguntas from '../../components/Perguntas/Perguntas'
import Footer from '../../components/Footer/Footer'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <Soluctions/>
      <Candidatura/>
      <Perguntas/>
      <Footer/>
    </div>
  )
}

export default Home