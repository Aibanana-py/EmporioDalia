import { useState } from 'react'
import './App.css'
import { Inicio } from './componentes/Inicio'
import { Menu } from './componentes/Menu'
import { Pie } from './componentes/Pie'
import { Galeria } from './componentes/Galeria'
import { Faqs } from './componentes/Faqs'
import { Login } from './componentes/Login'
import { Noticia1 } from './componentes/Noticia1'
import { Noticia2 } from './componentes/Noticia2'
import { Noticia3 } from './componentes/Noticia3'
import { Testimonios } from './componentes/Testimonios'
import { Error404 } from './componentes/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Procesar } from './componentes/Procesar'
import { API } from './componentes/API'

function App() {
  return (
    <BrowserRouter>
      <Menu />
        <Routes>

          <Route path="/" element={<Inicio />} />
          
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/procesar" element={<Procesar />} />
          <Route path="/api" element={<API />} />
  
          <Route path="/noticia1" element={<Noticia1 />} />
          <Route path="/noticia2" element={<Noticia2 />} />
          <Route path="/noticia3" element={<Noticia3 />} />

          <Route path="*" element={<Error404 />} />
        </Routes>

      <Pie />
    </BrowserRouter>
  )
}

export default App
