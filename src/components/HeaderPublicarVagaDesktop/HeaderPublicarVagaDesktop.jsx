import React from 'react'
import './HeaderPublicarVagaDesktop.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Typewriter from 'typewriter-effect';
import {useNavigate} from 'react-router-dom'

const HeaderPublicarVagaDesktop = () => {

    const navigate = useNavigate()
    function irPublicarVaga() {
        navigate('/publicar-vaga')
    }
    return (
        <>

            <header className='header-container-principal-desktop-publicar-vaga'>
                <div>
                    <h1 style={{ color: 'white' }}>TalentoAgora</h1>
                    <nav className='navegacao-container-desktop-publicar-vaga'>
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
                        wrapperClassName: 'string-animada-desktop-publicar-vaga',
                        cursor: ''
                    }}
                />
            </header>
        </>
    )
}

export default HeaderPublicarVagaDesktop