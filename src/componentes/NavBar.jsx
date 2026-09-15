import { Link } from "react-router-dom"


const NavBar = ()=>{

    return (<>
                   <Link to="/">Home</Link>
                   <Link to="/produtos">Produtos</Link>
                   <Link to="/cadastrarProdutos">cadastrar</Link>
    </>)
}

export default NavBar