import React, {useState} from 'react'
import './Admin.css'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import ModalAnaliseVaga from '../../components/ModalAnaliseVaga/ModalAnaliseVaga'

const Admin = () => {
  const [openModalAnaliseVagas, setOpenModalAnaliseVagas] = useState(false)

  function abrirModalAnalista() {
    setOpenModalAnaliseVagas(true)
  }

  function fecharModalAnalista() {
    setOpenModalAnaliseVagas(false)
  }
  return (
    <>
    
    <main className='admin-container'>
        <HeaderAdmin abrirModalAnalista={abrirModalAnalista} />

        <section className='modal-container-geral'>
            <ModalAnaliseVaga fecharModalAnalista={fecharModalAnalista} openModalAnaliseVagas={openModalAnaliseVagas}/>
        </section>
    </main>
    </>
  )
}

export default Admin