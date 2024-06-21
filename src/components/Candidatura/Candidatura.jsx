import React from 'react'
import './Candidatura.css'
import StepperComponent from '../../MaterialComponent/StepperComponent/StepperComponent'



const Candidatura = () => {


  return (
    <>

      <main className='main-container'>
        <section className='stepper-container'>

          <h2>3 passos para você se candidatar em uma vaga</h2>

            <StepperComponent/>
          
        </section>
      </main>

    </>
  )
}

export default Candidatura