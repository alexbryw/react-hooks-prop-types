import React from 'react'

function Greeting({name="John", excitement=1}){

    const greet = () => {
        alert("hello " + name)
    }

    return(
    <>
        <h3>Greetings  {name} {("!").repeat(excitement)}</h3>
        <button onClick={greet}>Greet</button>
    </>
    )
}

export default Greeting