import React from 'react'
import './FormContainerVagas.css'
import { Divider } from "antd";
import { Input, Form } from "antd";
import { Select } from "antd";
import { Button, Flex } from 'antd';
const { TextArea } = Input;
import InputMask from 'react-input-mask';




const FormContainerVagas = () => {
    return (
        <>

            <form className='form-publicar-vaga'>
                <h1>Sobre a empresa</h1>

                <article className='sobre-a-empresa'>

                    <label>Digite o nome da empresa</label>
                    <Input size="large" placeholder="Nome da empresa" />

                    <label>Digite uma rede social da empresa</label>
                    <Input size="large" placeholder="Rede Social da empresa; Ex: Linkedin" />

                    <label>Digite o e-mail da empresa</label>
                    <Input type='email' size="large" placeholder="E-mail da empresa" />
                </article>
                <Divider />
                <h1>Sobre a vaga</h1>
                <article className='sobre-a-empresa'>

                    <label>Digite a URL da vaga</label>
                    <Input type="text" size="large" placeholder="URL da vaga" />
                    <span style={{ color: 'red' }}>A vaga precisa ser externa!</span>

                    <label>Modo da vaga</label>
                    <Select
                        size="large"
                        defaultValue="Marque a opção"
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
                    <Input type='text' size="large" placeholder="Ex: R$ 2,000" />

                    <label>Descrição da vaga</label>
                    <TextArea
                        placeholder="Digite a descrição da vaga"
                        autoSize={{
                            minRows: 3,
                            maxRows: 5,
                        }}
                    />

                    <label>Até quando a vaga estará ativa?</label>
                    <Input type="text" size="large" placeholder="YY/YY/YYYY" />
                </article>

                <Button className='publicar-vaga-button' type="primary">Publicar vaga</Button>
            </form>
        </>
    )
}

export default FormContainerVagas