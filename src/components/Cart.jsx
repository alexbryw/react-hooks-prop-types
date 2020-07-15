import React, { useState } from 'react'
import CartItem from './CartItem'

export default function Cart({initialItems}){
    const [items, setItems] = useState(initialItems)

    const updateQty = (id, qty) => {
        const newItems = [...items]
        const foundItem = newItems.find(item => item.id === id)
        foundItem.qty = qty
        setItems(newItems)
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.price * item.qty
    ),0).toFixed(2)

    return (
    <div className="Cart">
        <h3>Cart</h3>
        <div className="Cart-Items">
            {items.map(item => (
                <CartItem key={item.id} {...item} updateQty={updateQty}/>
            ))}
        </div>
        <h3>Grand Total: ${grandTotal}</h3>
    </div>
    )
}