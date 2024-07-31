import React from 'react'
import './HeaderPrincipalDesktop.css';
import BackgroundWaveComponent from '../BackgroundWaveComponent/BackgroundWaveComponent';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HeaderPrincipalDesktop = () => {
    return (
        <>

            <header className='header-container-principal-desktop'>
                <div>
                    <h1 style={{ color: 'white' }}>TalentoAgora</h1>
                    <nav className='navegacao-container-desktop'>
                        <Link className='link-para-empresas' to='/para-empresas'>Para empresas</Link>
                        <Button type='primary'>Publicar Vaga</Button>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default HeaderPrincipalDesktop