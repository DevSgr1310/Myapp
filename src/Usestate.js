import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usestate() {
    const[data,setdata]=useState([])
    const[value,setvalue]=useState(false)
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-18&sortBy=publishedAt&apiKey=3c17eca032e64c679ee903fc2d4711e4")
           .then((response)=>{
            console.log(response.data);
            setdata(response.data.articles)
            
        })
    },[])
    function updateCounter(){
           
        setvalue(!value)
    }
  return (
    <div>
        <button onClick={updateCounter}>
        onClick
        </button>
        {data.map((item)=>{
            return <p   >{value===true ? item.author :" "}</p>

        })}
    </div>
  )
}

export default Usestate