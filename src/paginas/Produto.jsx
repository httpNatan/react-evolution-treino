import { useParams } from 'react-router-dom'
import {useFetch} from '../hoock/useFetch'


const Produto = ()=>{
    const { id } = useParams()
    const url = 'http://localhost:3001/products' 
    const {data,loading,error} = useFetch(url)
    

    
    let produto = data?.find((item)=>{ return( id === item.id) })

  

    return (<>
    <h1>produto id : {id}</h1>

        {loading && <p>carregando</p>}
        {error && <p>erro ao carregar dados</p>}
        {produto && <p>
            Nome: {produto.name}
            preco: {produto.price}
            </p>}
        

    </>)
}

export default Produto