import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./MenuNavAdmin.css"
import {
    MenuFoldOutlined
  } from '@ant-design/icons';
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button style={{width: '80px'}} type="primary" onClick={showDrawer}>
        <MenuFoldOutlined />
      </Button>
      <Drawer className="drawer-container-menu" title="Administração Menu" onClose={onClose} open={open}>
        <div className='menu-itens'>
          <Button type='primary' className='button-controle-vagas-analise'> Vagas para análise</Button>
          <Button type='primary' className='button-relatorio'>Relatórios</Button>
          <Button type='primary' className='button-sair'>Sair</Button>
        </div>
      </Drawer>
    </>
  );
};
export default App;