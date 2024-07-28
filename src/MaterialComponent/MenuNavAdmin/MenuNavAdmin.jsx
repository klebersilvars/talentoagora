import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
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
      <Drawer title="Administração Menu" onClose={onClose} open={open}>
        {/*COLOCAR ICONES AQUI DENTRO JUNTO COM AS ABAS QUE TERÃO NA ADMINISTRAÇÃO */}
      </Drawer>
    </>
  );
};
export default App;