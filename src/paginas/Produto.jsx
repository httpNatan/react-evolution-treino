import { useParams } from 'react-router-dom'
import {useFetch} from '../hoock/useFetch'


const Produto = ()=>{
    const { id } = useParams()
    const url = 'http://localhost:3001/products' 
    const {data,loading,error} = useFetch(url)
    

    
    let produto = data?.find((item)=>{ return( id === item.id) })

  

    return (<>

        {loading && <p>carregando</p>}
        {error && <p>erro ao carregar dados</p>}
        {produto && <p> id do produto : {produto.id}</p>}
        {produto && <h2>Nome: {produto.name}</h2>}
        {produto && <p>preco: {produto.price}</p>}
        {!produto &&  !loading && !error && <p>id inexistente</p>}

    </>)
}

export default Produto