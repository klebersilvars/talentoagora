import React from 'react'
import './PublicarVaga.css'
import FormContainerVagas from '../../components/FormContainerVagas/FormContainerVagas'
import Footer from '../../components/Footer/Footer'
import HeaderPrincipal from '../../components/HeaderPrincipal/HeaderPrincipal'

const PublicarVaga = () => {
  return (
    <>

      <HeaderPrincipal/>
      <main className='form-container'>
        <h2>Preencha sua vaga aqui na plataforma e receba as candidaturas!</h2>

        <section className='inputs-forms'>
          <FormContainerVagas/>
        </section>


      </main>
      <Footer />
    </>

  )
}

export default PublicarVaga