import React, {useState} from 'react'
import './Counter.css'

function Counter({step = 1}){
    const [counter, setCounter] = useState(0)
    return(
        <div className="Counter">
            <h3>Count: {counter}</h3>
            <button onClick={() => setCounter(counter + step)}>+{step}</button>
        </div>
    )
}

export default Counter