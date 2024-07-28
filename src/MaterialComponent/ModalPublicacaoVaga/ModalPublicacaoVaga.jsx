import React from 'react'
import './ModalPublicacaoVaga.css'
import { Modal } from 'antd'

const ModalPublicacaoVaga = ({isModalOpen, handleOk, handleCancel}) => {
    return (
        <>
            <Modal okText="Enviar" cancelText="Revisar conteúdo" title="Confirmação de publicação de vaga" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                Deseja enviar a vaga para análise?
            </Modal>

        </>
    )
}

export default ModalPublicacaoVaga