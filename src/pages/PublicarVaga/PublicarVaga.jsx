import React from 'react'
import './PublicarVaga.css'
import HeaderPublicarVaga from '../../components/HeaderPublicarVaga/HeaderPublicarVaga'
import FormContainerVagas from '../../MaterialComponent/FormContainerVagas/FormContainerVagas'

const PublicarVaga = () => {
  return (
    <>
    
    <HeaderPublicarVaga/>

    <main className='form-container'>
        <h2>Preencha sua vaga aqui na plataforma e receba as candidaturas!</h2>
        
        <section className='inputs-forms'>
          <FormContainerVagas/>
        </section>
    </main>

    </>
  )
}

export default PublicarVaga