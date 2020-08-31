import React, { useState} from 'react'
import MouseHook from './MouseHook'

export default function ShowMouseHook(){
    const [show, setShow] = useState(true)

    return (
        <div>
            <button onClick={() => {setShow(!show)}}>Show Mouse Hook</button>
            {show ? <MouseHook/> : undefined}
        </div>
    )
}