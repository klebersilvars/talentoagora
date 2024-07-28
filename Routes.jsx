import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './src/pages/Home/Home'
import Empresas from './src/pages/Empresas/Empresas'
import PublicarVaga from './src/pages/PublicarVaga/PublicarVaga'
import Admin from './src/pages/Admin/Admin'

const RoutesApp = () => {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/para-empresas" element={<Empresas/>}/>
            <Route path="/publicar-vaga" element={<PublicarVaga/>}/>
            <Route path="/admin/login" element={<Admin/>}/>
        </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default RoutesApp