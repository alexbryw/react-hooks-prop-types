import React from 'react'
import { useState, useContext } from 'react'
import './Name.css'
import { UserContext } from '../App'

export default function Name(){
    const [name, setName] = useState({firstName: "",lastName: ""})
    const user = useContext(UserContext)

    return(
        <div className="Name">
            <h3>From UserContext: {user}</h3>
            <h4>First name:</h4>
            <input type="text" id="firstName" onChange={e => setName({...name ,firstName: e.target.value})} />
            <h4>Last name:</h4>
            <input type="text" name="" id="lastName" onChange={e => setName({...name, lastName: e.target.value})} />
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}