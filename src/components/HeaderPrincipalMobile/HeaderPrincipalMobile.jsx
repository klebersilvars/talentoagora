import React from 'react'
import './HeaderPrincipalMobile.css'
import MenuNav from '../../MaterialComponent/MenuNav/MenuNav'
import Typewriter from 'typewriter-effect';


const HeaderPrincipalMobile = () => {
    return (
        <header className='header-container-principal-mobile'>
            <nav className='navegacao-container-mobile'>
                <h1 style={{ color: 'white' }}>TalentoAgora</h1>
                <MenuNav />
            </nav>
            <h1>TalentoAgora</h1>
            <Typewriter
                options={{
                    strings: ['Aqui você encontra a vaga dos sonhos.', 'Vagas para estágio/júnior.'],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    wrapperClassName: 'string-animada'
                }}
            />
        </header>
    )
}

export default HeaderPrincipalMobile