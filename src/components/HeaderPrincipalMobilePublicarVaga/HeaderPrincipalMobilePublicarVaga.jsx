import React from 'react'
import './HeaderPrincipalMobilePublicarVaga.css'
import MenuNav from '../../MaterialComponent/MenuNav/MenuNav'
import Typewriter from 'typewriter-effect';


const HeaderPrincipalMobilePublicarVaga = () => {
    return (
        <header className='header-container-principal-mobile-publicar-vaga'>
            <nav className='navegacao-container-mobile-publicar-vaga'>
                <h1 style={{ color: 'white' }}>TalentoAgora</h1>
                <MenuNav />
            </nav>
            <h1>TalentoAgora</h1>
            <Typewriter
                options={{
                    strings: ['Publique sua vaga gratuitamente, sem compromisso com a plataforma!', 'Aceitamos vagas de qualquer área para iniciantes.'],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    wrapperClassName: 'string-animada-publicar-vaga'
                }}
            />
        </header>
    )
}

export default HeaderPrincipalMobilePublicarVaga