import React from 'react'
import './LoginAdmin.css'
import { Input,Button } from "antd";


const LoginAdmin = () => {
  return (
    <>

      <main className='main-login-admin'>
        <section className='box-container-login'>
          <h3>Logar Admin</h3>

          <form className="form-container-login">
            {/* FAZER O FORMULÁRIO AQUI PARA A ENTRADA DO ADMINISTRADOR*/}
            <div className='container-input-login'>
              <span>E-mail</span>
              <Input type='email' required placeholder='E-mail' className='login-input' />
            </div>

            <div className='container-input-password'>
              <span>Senha</span>
              <Input type='password' required placeholder='*********' className='password-input' />
            </div>

            <Button type='primary' className='button-acessar-painel-administrativo'>
              Acessar painel
            </Button>

          </form>
        </section>
      </main>

    </>
  )
}

export default LoginAdmin