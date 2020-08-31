import React from 'react'
import './CartItem.css'

export default function CartItem({id, name, price, qty, updateQty}){
    const addOne = () => updateQty(id, qty + 1)
    const subOne = () => updateQty(id, qty - 1)
    return(
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div>
                <button disabled={qty <= 1 ? true : false} onClick={subOne}>-</button>
                    {qty}
                <button onClick={addOne}>+</button>
            </div>
            <div>Total: ${(qty*price).toFixed(2)} </div>
        </div>
    )
}