import React, { useState} from 'react'

export default function MoodToggler(){
    const [isGoodMood, setIsGoodMood] = useState(true)

    return (
        <button onClick={() => setIsGoodMood(!isGoodMood)}>{isGoodMood ? ":)" : ":("}</button>
    )
}