import React from 'react'
import "./Navbar.css"
import MenuNav from '../../MaterialComponent/MenuNav/MenuNav'
import { Link, useNavigate } from 'react-router-dom' 

const Navbar = () => {

  const navigation = useNavigate()

  function irPublicarVaga() {
    navigation('/publicar-vaga')
  }
  return (
    <nav className='nav-container'>

      <h1><Link className='link-home-talentoagora' to="/">TalentoAgora</Link></h1>
      
      <div className="area-redirecionar-mobile">
        
        <MenuNav/>
      </div>

      <div className="area-redirecionar-desktop">
        <Link style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} to="/para-empresas">Para empresas</Link>

        <button onClick={irPublicarVaga} className='btn-vagas'>
          Vagas
        </button>
      </div>
    </nav>
  )
}

export default Navbar