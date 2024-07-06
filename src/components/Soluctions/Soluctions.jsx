import React from 'react'
import "./Soluctions.css"
import ImgSolucaoCandidato from '../../assets/solucao.png'
import ImgSolucaoEmpresa from '../../assets/solucaoEmpresa.png'

const Soluctions = () => {
  return (
    <>
      <main className='soluctions-container'>
        <h1>Soluções</h1>
      <section className='solucoes'>
          

          <div className='box-container-candidato'>
              <img className='img-solucao-candidato' src={ImgSolucaoCandidato} alt="solucao-candidato" />
              <span>O <strong style={{color: '#64D4CD'}}>TalentoAgora</strong> oferece uma solução inovadora para candidatos que querem arranjar empregos através da plataforma.</span>
          </div>

          <div className='box-container-empresa'>
              <img className='img-solucao-empresa' src={ImgSolucaoEmpresa} alt="solucao-candidato" />
              <span>Os candidatos serão a <strong style={{color: '#64D4CD'}}>solução</strong> para o quebra-cabeça que as empresas estão procurando no mercado de trabalho.</span>
          </div>
      </section>
        

      </main>
    </>
  )
}

export default Soluctions