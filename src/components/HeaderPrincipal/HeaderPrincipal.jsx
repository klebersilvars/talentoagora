import './HeaderPrincipal.css';
import React from 'react'   
import Navbar from '../Navbar/Navbar'
import ImgVaga from '../../assets/entrevista.png'
import {useNavigate} from 'react-router-dom'

const HeaderPrincipal = () => {

  const navigate = useNavigate()
  function irPublicarVaga() {
    navigate('/para-empresas')
  }
  return (
    <>

      <header className='header-container-principal'>
        <Navbar />

        <section className='home-info'>

          <div className='texto-info-vaga'>
            <h2>TalentoAgora</h2>
            <p>A tão sonhada vaga de <strong style={{color: 'white', fontWeight: 'normal'}}>estagiário/júnior</strong> você só encontra aqui.</p>

            <div className='btn-container-vagas'>
              <button onClick={irPublicarVaga} className='publicar-vaga-button'>Publicar uma vaga</button>
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

export default HeaderPrincipal