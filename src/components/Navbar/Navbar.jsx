import React from 'react'
import "./Navbar.css"
import MenuNav from '../../MaterialComponent/MenuNav/MenuNav'
import { Link } from 'react-router-dom' 
import Empresas from '../../pages/Empresas/Empresas'

const Navbar = () => {
  return (
    <nav className='nav-container'>

      <h1>TalentoAgora</h1>
      
      <div className="area-redirecionar-mobile">
        
        <MenuNav/>
      </div>

      <div className="area-redirecionar-desktop">
        <Link className='link-empresa' to='/para-empresas'>Para empresas</Link>

        <button className='btn-vagas'>
          Vagas
        </button>
      </div>
    </nav>
  )
}

export default Navbar