import React from 'react'
import { useState } from 'react'

export default function Name(){
    const [name, setName] = useState({fName: "",lName: ""})

    return(
        <div>
            <input type="text" onChange={e => setName({lName: e.target.value})} />
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}