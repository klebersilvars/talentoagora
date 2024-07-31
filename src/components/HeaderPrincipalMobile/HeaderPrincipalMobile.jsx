import React from 'react'
import './HeaderPrincipalMobile.css'
import BackgroundWaveComponentMobile from '../BackgroundWaveComponentMobile/BackgroundWaveComponentMobile'
import MenuNav from '../../MaterialComponent/MenuNav/MenuNav'

const HeaderPrincipalMobile = () => {
    return (
        <header className='header-container-principal-mobile'>
            <nav className='navegacao-container-mobile'>
                <h1 style={{ color: 'white' }}>TalentoAgora</h1>
                <MenuNav />
            </nav>
            {/*<BackgroundWaveComponentMobile />*/}
        </header>
    )
}

export default HeaderPrincipalMobile