import React from 'react'
import './HeaderPrincipal.css'
import HeaderPrincipalDesktop from '../HeaderPrincipalDesktop/HeaderPrincipalDesktop'
import HeaderPrincipalMobile from '../HeaderPrincipalMobile/HeaderPrincipalMobile'

const HeaderPrincipal = () => {
  return (
    <>
      
    <header className='header-desktop'>
      <HeaderPrincipalDesktop/>
    </header>

    <header className='header-mobile'>
      <HeaderPrincipalMobile/>
    </header>
        
    </>
  )
}

export default HeaderPrincipal