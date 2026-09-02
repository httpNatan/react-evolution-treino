import { Link } from "react-router-dom"


const Home = ()=>{

    return(<>
            <Link to='/' > home</Link>
            <Link to='produtos' > produtos</Link>
            <Link to='cadastrarProdutos' > cadastrar</Link>
    </>)
}

export default Home