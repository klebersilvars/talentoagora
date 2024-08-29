import React, { useEffect } from 'react';
import { Button, Modal } from 'antd';
import './ModalDetalhesVagas.css'

const ModalDetalhesVagas = ({ open, vaga, onCancel }) => {

  useEffect(() => {
  
    if(vaga) {
      console.log(vaga)
    }

  }, [vaga])


  return (
    <>

      <Modal title={`Detalhes da Vaga - ${vaga?.nomeEmpresa}`} open={open} onOk={onCancel} onCancel={onCancel}  >

      </Modal>
    </>
  );
};
export default ModalDetalhesVagas;