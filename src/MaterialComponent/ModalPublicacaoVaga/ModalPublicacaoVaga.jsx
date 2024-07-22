import React from 'react'
import './ModalPublicacaoVaga.css'
import { Modal } from 'antd'

const ModalPublicacaoVaga = () => {
    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </>
    )
}

export default ModalPublicacaoVaga