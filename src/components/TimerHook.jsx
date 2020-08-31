import React,{ useState } from 'react'
import { useEffect } from 'react'
import styles from './TimerHook.module.scss'

export default function TimerHook(){
    const [count, setCount] = useState(0)

    useEffect(() =>{
        // console.log("set timer interval.")
        const addToCount = () => {
            setCount(count + 1)
        }
        const interval = setInterval(addToCount, 1000)
        
        return () => {
            // console.log('removing timer interval.')
            clearInterval(interval)
        }
    },[count])
    

    return(
        <div className={styles.TimerHook}>
            <h4>
                Timer sec: {count}
            </h4>
        </div>
    )
}