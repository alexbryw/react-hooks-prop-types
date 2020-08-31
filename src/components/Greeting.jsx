import React from 'react'
// import PropTypes from 'prop-types'

function Greeting({name="John", excitement=1 , greetInfo}){
// function Greeting(props){


    const greet = () => {
        alert("hello " + name)
    }

    return(
        <div style={{textAlign: "center"}}>
            <h3>Greetings  {name} {("!").repeat(excitement)}</h3>
            <h3>{greetInfo.name} {greetInfo.excitement}</h3>
            <button onClick={greet}>Greet</button>
        </div>
    )
}

export default Greeting

// Greeting.propTypes = {
//     name: PropTypes.string,
//     excitement: PropTypes.number
// }