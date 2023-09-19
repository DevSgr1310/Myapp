import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function  () { 
    const[data,setdata]=useState([])
    useEffect(()=> {
      axios.get("https://everidoorbackend.com/getAllScreens")
        .then((response)=>{
          console.log((response.data))
          setdata(response.data.Screens)

        })
      },[]);
    
  return (
    <div>
        
        <div>
              {
              data.map((item) => {
                return <p>{item.screenId}</p>;
              })
             }
        </div>
     
    </div>
  )
}
