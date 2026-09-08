import { useNavigate } from 'react-router-dom'


const BotaoVoltar = ()=>{
    const navigate = useNavigate()

    return(<button onClick={()=>{
        navigate(-1)
    }}  >voltar</button>)
}

export default BotaoVoltar