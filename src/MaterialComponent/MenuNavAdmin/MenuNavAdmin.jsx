import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./MenuNavAdmin.css"
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom'
import {
  MenuFoldOutlined
} from '@ant-design/icons';
const App = ({abrirModalAnalista, openModalAnaliseVagas}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  
  const navigate = useNavigate()

  async function sairAdmin() {
    try {
      await signOut(auth)
      navigate('/logar/adm');
      alert('Usuário deslogado');
      localStorage.removeItem('@dadosAdmin');
      localStorage.removeItem('@rotaPrivadaAdmin');
    } catch {
      console.error(error)
    }
  }
  return (
    <>
      <Button style={{ width: '80px' }} type="primary" onClick={showDrawer}>
        <MenuFoldOutlined />
      </Button>
      <Drawer className="drawer-container-menu" title="Administração Menu" onClose={onClose} open={open}>
        <div className='menu-itens'>
          <Button onClick={()=> {
            abrirModalAnalista(), setOpen(false)
          }} type='primary' className='button-controle-vagas-analise'> Vagas para análise</Button>
          <Button type='primary' className='button-relatorio'>Relatórios</Button>
          <Button onClick={sairAdmin} type='primary' className='button-sair'>Sair</Button>
        </div>
      </Drawer>
    </>
  );
};
export default App;