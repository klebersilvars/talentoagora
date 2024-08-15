import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './src/pages/Home/Home'
import PublicarVaga from './src/pages/PublicarVaga/PublicarVaga'
import Admin from './src/pages/Admin/Admin'
import LoginAdmin from './src/pages/LoginAdmin/LoginAdmin'
import Private from './Private'

const RoutesApp = () => {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/publicar-vaga" element={<PublicarVaga/>}/>
            <Route path="/logar/adm" element={<LoginAdmin/>}/>
            <Route path="/admin/:id" element={<Private><Admin/></Private>}/>
        </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default RoutesApp