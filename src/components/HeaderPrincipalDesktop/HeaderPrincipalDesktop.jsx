import React from 'react'
import './HeaderPrincipalDesktop.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Typewriter from 'typewriter-effect';
import {useNavigate} from 'react-router-dom'

const HeaderPrincipalDesktop = () => {

    const navigate = useNavigate()
    function irPublicarVaga() {
        navigate('/publicar-vaga')
    }
    return (
        <>

            <header className='header-container-principal-desktop'>
                <div>
                    <h1 style={{ color: 'white' }}>TalentoAgora</h1>
                    <nav className='navegacao-container-desktop'>
                        <Button onClick={irPublicarVaga} type='primary'>Publicar Vaga</Button>
                    </nav>
                </div>

                <h1>TalentoAgora</h1>
                <Typewriter
                    options={{
                        strings: ['Aqui você encontra a vaga dos sonhos.', 'Vagas para estágio/júnior.'],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        wrapperClassName: 'string-animada-desktop',
                        cursor: ''
                    }}
                />
            </header>
        </>
    )
}

export default HeaderPrincipalDesktop