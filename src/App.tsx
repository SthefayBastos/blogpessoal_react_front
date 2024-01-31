
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'

import { AuthProvider } from './contexts/AuthContext'
import Home from './assets/pages/home/Home'
import Login from './assets/pages/login/Login'
import Cadastro from './assets/pages/cadastro/Cadastro'

import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTemas/FormularioTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import ListaPostagens from './components/postagens/cardPostagem/listaPostagens/ListaPostagens'
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navBar/Navbar'
import Perfil from './assets/pages/perfil/Perfil'





function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App
