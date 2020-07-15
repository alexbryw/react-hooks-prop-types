import React from 'react'

function Greeting({name="John", excitement=1}){

    const greet = () => {
        alert("hello " + name)
    }

    return(
        <div style={{textAlign: "center"}}>
            <h3>Greetings  {name} {("!").repeat(excitement)}</h3>
            <button onClick={greet}>Greet</button>
        </div>
    )
}

export default Greeting