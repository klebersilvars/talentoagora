import React from 'react'
import './Perguntas.css'
import Accordion from '../../MaterialComponent/Accordion/Accordion'


const Perguntas = () => {
  return (
    <>
    
    <main className='main-container-perguntas'>
        <article className='article-perguntas'>
            <h2>Perguntas frequentes</h2>
            <Accordion/>
        </article>
    </main>
    
    </>
  )
}

export default Perguntas