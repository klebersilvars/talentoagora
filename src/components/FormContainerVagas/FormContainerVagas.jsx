import React, { useState } from 'react'
import './FormContainerVagas.css'
import { Input, Form, Select, Button, Modal, Divider } from "antd";
const { TextArea } = Input;
import { db } from '../../../firebase/FirebaseConfig'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import ModalPublicacaoVaga from '../../MaterialComponent/ModalPublicacaoVaga/ModalPublicacaoVaga';


const FormContainerVagas = () => {

    //useStates dos formulários

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
    async function enviarVagaAnalise() {
        try {
            // Primeiro, adicione o documento sem o ID
            const docRef = await addDoc(collection(db, "vagas_analise"), {
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

            // Depois, atualize o documento com o ID gerado
            await updateDoc(doc(db, "vagas_analise", docRef.id), {
                id: docRef.id,
            });

            
        } catch (error) {

        }
    }

    return (
        <>
            {/* Colocar o modal de publicacao de vaga aqui e fazer a lógica para confirmção dele*/}
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
            </form>
        </>
    )
}

export default FormContainerVagas