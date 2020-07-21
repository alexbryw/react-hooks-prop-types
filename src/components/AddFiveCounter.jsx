import React, {useState} from 'react'
import './Counter.css'

function AddFiveCounter(){
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
            <h3>Prev-Count: {counter}</h3>
            <button onClick={addFive}>+5</button>
        </div>
    )
}

export default AddFiveCounter