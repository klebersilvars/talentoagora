import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './src/pages/Home/Home'

const RoutesApp = () => {
  return (
    <>
    
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default RoutesApp