import { useEffect, useState } from "react";

export const useFetch = (url)=>{

    const[data,setData]= useState([])
    const[loading,setloading] = useState(false)
    const[error,setError] = useState(false)

    useEffect(()=>{
        let fetchDados = async ()=>{
            try{
                setloading(true)
                let objJson = await fetch(url)

                if (!objJson.ok) {
                     throw new Error("Erro ao buscar dados");
                    }

                let obj = await objJson.json()
                setData(obj)

            }catch(err){
                setError(true)
            }finally{
                setloading(false)
            }

        }

        fetchDados()

    },[url])


    return({data,setData,loading,setloading,error,setError})
}

export default useFetch