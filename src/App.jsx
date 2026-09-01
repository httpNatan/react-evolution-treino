import './index.css'
import {useFetch} from './hoock/useFetch'
import { useEffect, useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {

  const url = 'http://localhost:3001/products' 

  const {data,setData,loading,setloading,error,setError} = useFetch(url)
  const[name,setName] = useState('')
  const[price,setPrice] = useState('')

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

                  let dado = await response.json()
                  setData([...data,dado])
       

              }catch(err){
                setError(err.message)
          }
      
      setName('')
      setPrice('')

    }
      
  return (
    <>
      <h1>treinando</h1>

       {loading && <p>Carregando...</p>}
       {error && <p>erro ao carregar dados</p>}
       {data && data.map((item)=>{
        return(<p key={item.id}>nome : {item.name} / valor : {item.price}</p>)
       })}
       
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

export default App
