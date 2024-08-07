import React from 'react'
import './HeaderPrincipalPublicarVaga.css'
import HeaderPublicarVagaDesktop from '../HeaderPublicarVagaDesktop/HeaderPublicarVagaDesktop'
import HeaderPrincipalMobilePublicarVaga from '../HeaderPrincipalMobilePublicarVaga/HeaderPrincipalMobilePublicarVaga'

const HeaderPrincipalPublicarVaga = () => {
  return (
    <>

      <header className='header-desktop-publicar-vaga'>
        <HeaderPublicarVagaDesktop />
      </header>

      <header className='header-mobile-publicar-vaga'>
        <HeaderPrincipalMobilePublicarVaga />
      </header>

    </>
  )
}

export default HeaderPrincipalPublicarVaga