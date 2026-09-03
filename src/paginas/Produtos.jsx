
import {useFetch} from '../hoock/useFetch'


const Produtos =() => {

  const url = 'http://localhost:3001/products' 

  const {data,loading,error} = useFetch(url)


  
  return (
    <>
      <h1>treinando</h1>

       {loading && <p>Carregando...</p>}
       {error && <p>erro ao carregar dados</p>}
       {data && data.map((item)=>{
        return(<p key={item.id}>nome : {item.name} / valor : {item.price}</p>)
       })}
       
    </>
  )
}

export default Produtos
