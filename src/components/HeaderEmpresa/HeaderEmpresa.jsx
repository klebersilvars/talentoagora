import React from 'react'
import "./HeaderEmpresa.css"
import Navbar from '../Navbar/Navbar'
import ImgVaga from '../../assets/entrevista.png'

const HeaderEmpresa = () => {
  return (
    <>

      <header className='header-container-empresa'>
        <Navbar />

        <section className='home-info-empresa '>

          <div className='texto-info-vaga'>
            <h2>TalentoAgora</h2>
            <p className='paragrafo-empresa'>Não importa se a sua empresa é pequena ou grande, oferecemos na plataforma uma forma ideal para encontrar os melhores talentos.</p>

            <div className='btn-container-vagas'>
              <button className='publicar-vaga-button'>Publicar uma vaga</button>
            </div>
          </div>

          <div className='img-container'>
            <img className='img-vaga' src={ImgVaga} alt="vaga" />
          </div>
          
        </section>
      </header>


    </>
  )
}

export default HeaderEmpresa