import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Produtos from './paginas/Produtos'
import CadastrarProduto from './paginas/CadastrarProduto'
import NavBar from './componentes/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element ={<Home/>} />
              <Route path='/produtos' element ={<Produtos/>} />
              <Route path='/cadastrarProdutos' element ={<CadastrarProduto/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
