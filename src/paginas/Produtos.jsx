
import BotaoVoltar from '../componentes/BotaoVolta'
import {useFetch} from '../hoock/useFetch'
import { Link } from 'react-router-dom'

const Produtos =() => {

  const url = 'http://localhost:3001/products' 

  const {data,loading,error} = useFetch(url)


  
  return (
    <>
      <h1>treinando</h1>

       {loading && <p>Carregando...</p>}
       {error && <p>erro ao carregar dados</p>}
       {data && data.map((item)=>{
        return(<p key={item.id}>nome : {item.name} / valor : {item.price} <Link to={`/produtos/${item.id}`} >ver</Link> </p>)
       })}
       <BotaoVoltar/>
    </>
  )
}

export default Produtos
