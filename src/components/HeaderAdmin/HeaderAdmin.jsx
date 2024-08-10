import React from 'react'
import './HeaderAdmin.css'
import MenuNavAdmin from '../../MaterialComponent/MenuNavAdmin/MenuNavAdmin'


const HeaderAdmin = ({abrirModalAnalista}) => {
    return (
        <>
            <header className='header-admin-container'>
                <div className='menu-nav-admin'>
                    <h2 style={{color: 'white', fontSize: '22px'}}>Dashboard Admin</h2>
                    <MenuNavAdmin abrirModalAnalista={abrirModalAnalista}/>
                </div>
            </header>
        </>
    )
}

export default HeaderAdmin