import React from 'react'
import "./Soluctions.css"
import ImgSolucaoCandidato from '../../assets/solucao.png'
import ImgSolucaoEmpresa from '../../assets/solucaoEmpresa.png'

const Soluctions = () => {
  return (
    <>
      <main className='soluctions-container'>

        <section className='solucoes'>
          <div className='solucao-candidato'>
            <img className='img-solucao-candidato' src={ImgSolucaoCandidato} alt="solucao-candidato" />
            <h3>SOLUÇÃO INOVADORA PARA INICIANTES QUE ESTÃO BUSCANDO EMPREGO NA ÁREA DE PROGRAMAÇÃO</h3>
          </div>

          <div className='solucao-empresa'>
              <img className='img-solucao-empresa' src={ImgSolucaoEmpresa} alt="solucao-empresa" />
              <h3>EMPRESAS CONSEGUINDO FORMAR OS INICIANTES PARA SOLUCIONAR OS PROBLEMAS</h3>
          </div>

        </section>

      </main>
    </>
  )
}

export default Soluctions