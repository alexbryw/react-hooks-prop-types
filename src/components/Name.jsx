import React from 'react'
import { useState } from 'react'
import './Name.css'

export default function Name(){
    const [name, setName] = useState({firstName: "",lastName: ""})

    return(
        <div className="Name">
            <h4>First name:</h4>
            <input type="text" onChange={e => setName({...name ,firstName: e.target.value})} />
            <h4>Last name:</h4>
            <input type="text" name="" id="" onChange={e => setName({...name, lastName: e.target.value})} />
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}