import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
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
        .catch((error)=> {
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
        width={1000}
        className='modalAnaliseVagas'
        bodyStyle={{ height: 'auto', overflowY: 'auto' }}

      >
        <p>some contents...</p>


      </Modal>
    </>
  );
};
export default ModalAnaliseVaga;