import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'antd';
import './ModalAnaliseVaga.css'
import { db } from '../../../firebase/FirebaseConfig';
import { getDocs, collection, getDoc, doc } from 'firebase/firestore'



const ModalAnaliseVaga = ({ openModalAnaliseVagas, fecharModalAnalista }) => {

  const [vagasAnalise, setVagasAnalise] = useState([]);

  useEffect(() => {
    async function buscarVagas() {
      const checkVagas = collection(db, 'vagas_analise')
      await getDocs(checkVagas)
        .then((snapshot) => {
          let lista = [];
          snapshot.forEach((document) => {
            lista.push({
              id: document.id,
              nomeEmpresa: document.data().nome_empresa,
              emailEmpresa: document.data().nome_empresa,
              modoVaga: document.data().nom_vaga,
              nivelVaga: document.data().nivel_vaga,
              redeSocialEmpresa: document.data().rede_social_empresa,
              salarioVaga: document.data().salario_vaga,
              tipoContrato: document.data().tipo_contrato,
              urlVaga: document.data().url_vaga,
              descricaoVaga: document.data().descricao_vaga,
              vagaPublicada: document.data().vaga_publicada
            })

            //requisição ao banco de dados feita, agora só manipular criando os cards dentro do modal
            setVagasAnalise(lista)
          })
        })
        .catch((error) => {
          console.error(error)
        })
    }
    buscarVagas()
  }, [])
  return (
    <>

      <Modal
        title="Vagas aguardando análise"
        centered
        open={openModalAnaliseVagas}
        onCancel={fecharModalAnalista}
        onOk={fecharModalAnalista}
        cancelText='Fechar'
        width={1000}
        className='modalAnaliseVagas'
        bodyStyle={{ height: 'auto', overflowY: 'auto', width: '100%' }}

      >

        <section className='section-vagas-analise'>
          {vagasAnalise.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.nomeEmpresa}
                extra={<Button type='primary'>Ver Detalhes</Button>}
                style={{
                  width: 300,
                }}
                className='box-card-analise'
              >

                <div className='info-card-analise'>
                  <span>Status:{item.vagaPublicada == false ? 'VagaPublica' : 'Vaga Publicada'}</span>
                  <span>Descrição: {item.descricaoVaga}</span>
                </div>


              </Card>
            )
          })}
        </section>

      </Modal>
    </>
  );
};
export default ModalAnaliseVaga;