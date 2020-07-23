import React, { useState, useEffect} from 'react'

export default function MouseHook(){
    const [xCord, setXCord] = useState(0)
    const [yCord, setYCord] = useState(0)

    const mouseCordUpdate = (e) => {
        console.log("update x, y.")
        setXCord(e.x)
        setYCord(e.y)
    }

    useEffect(()=>{
        console.log("add mouse event listener.")
        window.addEventListener('mousemove', mouseCordUpdate)

        return () => {
            window.removeEventListener('mousemove', mouseCordUpdate)
        }
    }, [])
    return (
        <div>
            <h4>mouse X: {xCord}, Y:{yCord}</h4>
        </div>
    )
}