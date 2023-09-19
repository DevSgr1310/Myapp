import axios from 'axios'
import React, { useEffect } from 'react'

export default function Sdfg() {
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response)=>{
    //         console.log(response)
    //     })
    // })
  const submitHandler=(event)=>{
    event.preventDefault();
    const title =event.target.title.value;
    const body =event.target.body.value;
    const data={ title,body}
    axios.post("https://jsonplaceholder.typicode.com/todos/1", data )
      .then((response)=>{
        console.log(response);
      })
      .catch(error=>{
        console.log(error); 
      })
  };
  return (
    <div className=""> 
        <form  onSubmit={submitHandler} >
        <input type="text" name=" title"  className="border"/> 
        <hr />
        <input type="text" name="body" className="border" />
        <button > click me</button>
      </form>
    </div>
  )
}
