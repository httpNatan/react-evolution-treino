
import { useEffect, useState } from 'react'


const CadastrarProduto = () => {

  const url = 'http://localhost:3001/products' 


  const[name,setName] = useState('')
  const[price,setPrice] = useState('')
  const[error , setError] = useState('')

  const handleSubmit = async (e)=>{
      e.preventDefault()

      let objetoTemporario = {
         name,
         price
      }

         try{
              let response = await fetch(url,{
                method:'POST',
                headers:{
                  "Content-Type": "application/json"
               },
               body:JSON.stringify(objetoTemporario)
                  
              })
              
               if (!response.ok) {
                     throw new Error("Erro ao buscar dados");
                  }
       

              }catch(err){
                setError(err.message)
          }
      
      setName('')
      setPrice('')

    }
      
  return (
    <>
           
       <form onSubmit={handleSubmit}>
          <label>
              <span>nome</span>
              <input type="text" name="name" value={name} onChange={(i)=>{setName(i.target.value)}}/>
          </label>
          <label>
              <span>price</span>
              <input type="number" name="price" value={price} onChange={(i)=>{setPrice(i.target.value)}} />
          </label>
          <button>salvar</button>
       </form>
      
    </>
  )
}

export default CadastrarProduto
