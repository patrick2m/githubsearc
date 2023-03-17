import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import NaoEncontrado from './pages/NaoEncontrado'
import Repositorios from './pages/Repositorios'
import Usuario from './pages/Usuario'
import Usuarios from './pages/Usuarios'

import { FavoritosStorage } from './lib/ContextoFavoritos'

function App() {

  return (
    <div className="App">
      <FavoritosStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Usuarios/:nome" element={<Usuarios />} />
            <Route path="/Repositorios/:nome" element={<Repositorios />} />
            <Route path="/Usuario/:nome" element={<Usuario />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="/*" element={<NaoEncontrado />} />
          </Routes>
        </BrowserRouter>
      </FavoritosStorage>
    </div>
  )
}

export default App
