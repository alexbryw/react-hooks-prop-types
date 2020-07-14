import React, { useState} from 'react'

export default function MoodToggler(){
    const [isGoodMood, setIsGoodMood] = useState(true)
    const styles = {color: isGoodMood? "green" : "red"}

    return (
        <div className="MoodToggler">
            <button style={styles} onClick={() => setIsGoodMood(!isGoodMood)}>{isGoodMood ? ":)" : ":("}</button>
        </div>
    )
}