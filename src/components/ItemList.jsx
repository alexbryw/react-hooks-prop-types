import React from 'react'
import { useState } from 'react'

export default function ItemList() {
    const [items, setItems] = useState([])

    const addItem = () => {
        // let newItems = [...items]
        // newItems.push({id: items.length + 1, number: Math.round(Math.random()*10) })
        setItems([...items, {id: items.length + 1, number: Math.round(Math.random()*10)}])
    }
    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>id:{item.id}  number:{item.number}</li>
                ))}
            </ul>
        </div>
    )
}