import React from 'react'
import './HeaderPrincipalDesktop.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom'
import EntrevistaImg from '../../assets/entrevista.png'

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

                <article className='article-container-header-principal-desktop'>
                    <div>
                        <h1>TalentoAgora</h1>
                        <p>Aqui você encontra a vaga dos sonhos</p>
                    </div>

                    <img src={EntrevistaImg} alt="img-entrevista" className='img-entrevista' />
                </article>
            </header>
        </>
    )
}

export default HeaderPrincipalDesktop