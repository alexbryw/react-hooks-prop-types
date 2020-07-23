import React, { useState, useEffect } from 'react'

export default function TitleCount(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log(count)
        document.title = count
    },[count])

    useEffect(()=>{
        console.log(name)
    },[name])
    
    return(
        <div>
            <input type="text" name="" id="" onChange={e => setName(e.target.value)}/>
            <h4>name: {name}</h4>
            <button onClick={()=>{setCount(count + 1)}}>{count} in title</button>
        </div>
    )
}