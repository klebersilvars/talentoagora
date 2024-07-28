import React from 'react'
import './HeaderAdmin.css'
import MenuNavAdmin from '../../MaterialComponent/MenuNavAdmin/MenuNavAdmin'


const HeaderAdmin = () => {
    return (
        <>
            <header className='header-admin-container'>
                <div className='menu-nav-admin-mobile'>
                    <h2 style={{color: 'white'}}>Administrador</h2>
                    <MenuNavAdmin/>
                </div>

                {/*Configurar header para desktopp */}
            </header>
        </>
    )
}

export default HeaderAdmin