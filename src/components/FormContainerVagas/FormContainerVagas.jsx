import React, { useState } from 'react'
import './FormContainerVagas.css'
import { Input, Select, Button, Modal, Divider } from "antd";
const { TextArea } = Input;
import { db } from '../../../firebase/FirebaseConfig'
import { collection, doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import ModalPublicacaoVaga from '../../MaterialComponent/ModalPublicacaoVaga/ModalPublicacaoVaga';


const FormContainerVagas = () => {

    //useStates dos formulários
    const [isModalOpen, setIsModalOpenn] = useState(false)
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [redeSocialEmpresa, setRedeSocialEmpresa] = useState("");
    const [emailEmpresa, setEmailEmpresa] = useState("");
    const [urlVaga, setUrlVaga] = useState("");
    const [modoVagaEmpresa, setModoVagaEmpresa] = useState("");
    const [tipoContrato, setTipoContrato] = useState("");
    const [salarioVaga, setSalarioVaga] = useState("");
    const [descricaoVaga, setDescricaoVaga] = useState("")
    const [nivelVagas, setNivelVaga] = useState("")

    // função para enviar dados para o banco de dados
    function enviarVagaAnalise() {
        setIsModalOpenn(true)
    }

    async function handleOk() {
        try {

            if (!nomeEmpresa == '' && !emailEmpresa == '' && !redeSocialEmpresa == '' && !descricaoVaga == '' && !modoVagaEmpresa == '' && !salarioVaga == '' && !tipoContrato == '' && !urlVaga == '') {
                // Gere um ID de documento antes de adicionar o documento
                const docRef = doc(collection(db, "vagas_analise"));
                const docId = docRef.id;

                // Use esse ID ao criar o documento
                await setDoc(docRef, {
                    id: docId,
                    nome_empresa: nomeEmpresa,
                    email_empresa: emailEmpresa,
                    rede_social_empresa: redeSocialEmpresa,
                    descricao_vaga: descricaoVaga,
                    modo_vaga: modoVagaEmpresa,
                    nivel_vaga: nivelVagas,
                    salario_vaga: salarioVaga,
                    tipo_contrato: tipoContrato,
                    url_vaga: urlVaga,
                    vaga_publicada: false,
                });

                toast.success("Vaga enviada para analíse")
                setIsModalOpenn(false)
                setNomeEmpresa("")
                setEmailEmpresa("")
                setDescricaoVaga("")
                setModoVagaEmpresa("")
                setNivelVaga("")
                setSalarioVaga("")
                setUrlVaga("")
                setRedeSocialEmpresa("")
                setTipoContrato("")
            }else {
                toast.error('Preencha todos os campos corretamente!')
            }
        } catch (error) {
            toast.error("Erro! Tente novamente mais tarde")
            console.error(error)
        }
    }

    function handleCancel() {
        setIsModalOpenn(false)
    }

    return (
        <>
            
            <ModalPublicacaoVaga handleCancel={handleCancel} handleOk={handleOk} isModalOpen={isModalOpen} />
            <form className='form-publicar-vaga'>
                <h1>Sobre a empresa</h1>

                <article className='sobre-a-empresa'>

                    <label>Digite o nome da empresa</label>
                    <Input size="large" onChange={(e) => { setNomeEmpresa(e.target.value) }} placeholder="Nome da empresa" />

                    <label>Digite uma rede social da empresa</label>
                    <Input size="large" onChange={(e) => { setRedeSocialEmpresa(e.target.value) }} placeholder="Rede Social da empresa; Ex: Linkedin" />

                    <label>Digite o e-mail da empresa</label>
                    <Input onChange={(e) => { setEmailEmpresa(e.target.value) }} type='email' size="large" placeholder="E-mail da empresa" />
                </article>
                <Divider />

                <h1>Sobre a vaga</h1>
                <article className='sobre-a-empresa'>
                    <label>Digite a URL da vaga</label>
                    <Input type="text" onChange={(e) => { setUrlVaga(e.target.value) }} size="large" placeholder="URL da vaga" />
                    <span style={{ color: 'red' }}>A vaga precisa ser externa!</span>

                    <label>Modo da vaga</label>
                    <Select
                        size="large"
                        defaultValue="Marque a opção"
                        onChange={(value) => { setModoVagaEmpresa(value) }}
                        style={{
                            width: '100%',
                        }}
                        allowClear
                        options={[
                            {
                                value: 'Home-Office',
                                label: 'Home-Office',
                            },
                            {
                                value: 'Híbrido',
                                label: 'Híbrido'
                            },
                            {
                                value: 'Presencial',
                                label: 'Presencial'
                            }
                        ]}
                    />

                    <label>Digite o tipo de contrato</label>
                    <Select
                        size="large"
                        defaultValue="Marque a opção"
                        onChange={(value) => { setTipoContrato(value) }}
                        style={{
                            width: '100%',
                        }}
                        allowClear
                        options={[
                            {
                                value: 'CLT',
                                label: 'CLT',
                            },
                            {
                                value: 'PJ',
                                label: 'PJ'
                            },
                        ]}
                    />

                    <label>Salário da vaga</label>
                    <Input type='text' size="large" onChange={(e) => { setSalarioVaga(e.target.value) }} placeholder="Ex: R$ 2,000" />

                    <label>Descrição da vaga</label>
                    <TextArea
                        placeholder="Digite a descrição da vaga"
                        onChange={(e) => { setDescricaoVaga(e.target.value) }}
                        autoSize={{
                            minRows: 3,
                            maxRows: 5,
                        }}
                    />

                    <label>Nível da vaga</label>
                    <Select
                        size="large"
                        defaultValue="Marque a opção"
                        required
                        onChange={(value) => { setNivelVaga(value) }}
                        style={{
                            width: '100%',
                        }}
                        allowClear
                        options={[
                            {
                                value: 'Estagiário',
                                label: 'Estagiário',
                            },
                            {
                                value: 'Júnior',
                                label: 'Júnior'
                            },
                        ]}
                    />
                </article>

                <Button onClick={enviarVagaAnalise} className='publicar-vaga-button' type="primary">Publicar vaga</Button>

                <ToastContainer />
            </form>
        </>
    )
}

export default FormContainerVagas