import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import './Cart.css'

export default function Cart({initialItems}){
    const initialState = JSON.parse(window.localStorage.getItem('items'))
    const [items, setItems] = useState(initialState || initialItems)
    
    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items))
    },[items])

    // const updateQty = (id, qty) => {
    //     const newItems = [...items]
    //     const foundItem = newItems.find(item => item.id === id)
    //     foundItem.qty = qty
    //     setItems(newItems)
    // }

    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if(item.id === id){
                console.log("ret item id " + item.id)
                return {...item , qty:  newQty}
            }
            console.log(item.id)
            return item
        })
        setItems(newItems)
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.price * item.qty
    ),0).toFixed(2)

    return (
    <div className="Cart">
        <h2 className="Cart-Title">Shopping Cart</h2>
        <div className="Cart-Items">
            {items.map(item => (
                <CartItem key={item.id} {...item} updateQty={updateQty}/>
            ))}
        </div>
        <h3 className="Cart-Total">Grand Total: ${grandTotal}</h3>
    </div>
    )
}