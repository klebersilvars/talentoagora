import React from 'react'
import "./Empresas.css"
import HeaderEmpresa from '../../components/HeaderEmpresa/HeaderEmpresa'
import Accordion  from '../../MaterialComponent/AccordionEmpresas/Accordion'

const Empresas = () => {
  return (
    <>
    <HeaderEmpresa/>
    <main className='main-container-empresas'>
        <div className='perguntas-frequentes-empresas'>
          <h2>Perguntas frequentes</h2>
          
          <Accordion/>
        </div>
    </main>
    
    </>
  )
}

export default Empresas