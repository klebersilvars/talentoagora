import React, {useState} from 'react'
import './LoginAdmin.css'
import { Input,Button } from "antd";
import {auth} from '../../../firebase/FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


const LoginAdmin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function logarAdmin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // aqui estou pegando os dados do usuário logado
      
      const adminLogged = {
        uid: user.uid,
        email: user.email
      };

      localStorage.setItem('@dadosAdmin', JSON.stringify(adminLogged))
      
      navigate(`/admin/${adminLogged.uid}`);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>

      <main className='main-login-admin'>
        <section className='box-container-login'>
          <h3>Logar Admin</h3>

          <form className="form-container-login">
            {/* FAZER O FORMULÁRIO AQUI PARA A ENTRADA DO ADMINISTRADOR*/}
            <div className='container-input-login'>
              <span>E-mail</span>
              <Input value={email} onChange={(e)=> {setEmail(e.target.value)}} type='email' required placeholder='E-mail' className='login-input' />
            </div>

            <div className='container-input-password'>
              <span>Senha</span>
              <Input value={password} onChange={(e)=> {setPassword(e.target.value)}} type='password' required placeholder='*********' className='password-input' />
            </div>

            <Button onClick={logarAdmin}  type='primary' className='button-acessar-painel-administrativo'>
              Acessar painel
            </Button>

          </form>
        </section>
      </main>

    </>
  )
}

export default LoginAdmin