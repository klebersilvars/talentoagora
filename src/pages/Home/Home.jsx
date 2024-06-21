import React from 'react'
import Header from '../../components/Header/Header'
import Soluctions from '../../components/Soluctions/Soluctions'
import Candidatura from '../../components/Candidatura/Candidatura'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <Soluctions/>
      <Candidatura/>
    </div>
  )
}

export default Home