import React, {useState} from 'react'
import './Counter.css'

function Counter({step = 1}){
    // const initCounter = 0
    const [counter, setCounter] = useState(0)

    const addFive = () => {
        for(let i = 0; i < 5; i++){
            setCounter(prevCounter =>{
                console.log(prevCounter)
                return (
                    prevCounter + 1
                )
            })
        }
    }
    return(
        <div className="Counter">
            <h3>Count: {counter}</h3>
            <button onClick={addFive}>+{step}</button>
        </div>
    )
}

export default Counter