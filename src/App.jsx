import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Produtos from './paginas/Produtos'
import CadastrarProduto from './paginas/CadastrarProduto'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element ={<Home/>} />
              <Route path='produtos' element ={<Produtos/>} />
              <Route path='cadastrarProdutos' element ={<CadastrarProduto/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
