import React from 'react'
import "./Navbar.css"
import MenuNav from '../../MaterialComponent/MenuNav/MenuNav'

const Navbar = () => {
  return (
    <nav className='nav-container'>

      <h1>TalentoAgora</h1>
      
      <div className="area-redirecionar-mobile">
        {/* INSTALAR UMA BIBLIOTECA PARA CONFIGURAR O LAYOUT DE REDIRECIONAMENTO */}
        <MenuNav/>
      </div>

      <div className="area-redirecionar-desktop">
        <span>Para empresas</span>

        <button className='btn-vagas'>
          Vagas
        </button>
      </div>
    </nav>
  )
}

export default Navbar