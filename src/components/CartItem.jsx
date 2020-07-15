import React from 'react'

export default function CartItem({id, name, price, qty, updateQty}){
    return(
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div>
                <button disabled={qty === 1 ? true : false} onClick={() => updateQty(id, qty-1)}>-</button>
                    {qty}
                <button onClick={() => updateQty(id ,qty+1)}>+</button>
            </div>
            <div>Total: ${qty*price} </div>
        </div>
    )
}