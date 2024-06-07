import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import HomeView from './components/HomeView/HomeView'
import ForoView from './components/ForoView/ForoView'
import EntradaView from './components/ForoView/Entradas/EntradaView/EntradaView'
import CrearEntrada from './components/ForoView/Entradas/CrearEntrada/CrearEntrada'
import Register from './components/Register/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView></HomeView>}>
          </Route>
          <Route path='/register' element={<Register></Register>}>
          </Route>
          <Route path='/login' element={<Login></Login>}>
          </Route>
          <Route path='/foro' element={<ForoView></ForoView>}>
          </Route>
          <Route path='/foro/:id' element={<EntradaView></EntradaView>}>
          </Route>
          <Route path='/crear-entrada' element={<CrearEntrada></CrearEntrada>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
