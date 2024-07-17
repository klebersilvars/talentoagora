import React from 'react'
import "./HeaderPublicarVaga.css"
import Navbar from '../Navbar/Navbar'
import ImgVaga from '../../assets/entrevista.png'

const HeaderPublicarVaga = () => {
  return (
    <>

      <header className='header-container-publicar-vaga'>
        <Navbar />

        <section className='home-info-publicar-vaga'>

          <div className='texto-info-vaga'>
            <h2>Publicar vaga</h2>
            <p className='paragrafo-empresa'>Publique sua vaga de forma 100% gratuita em nossa plataforma :)</p>
          </div>
        </section>
      </header>


    </>
  )
}

export default HeaderPublicarVaga