import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART_ACTION } from '../redux-state/actions';


export default function ShoppingCart() {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Shopping Cart</h3>
            {shoppingCart.items.map(item => {
                return (
                    <div>
                        {item.name} 
                        <button
                            onClick={() => dispatch({
                                type: REMOVE_FROM_CART_ACTION,
                                payload: {
                                    itemId: item.id
                                }
                        })}>
                        Remove</button>
                    </div>
            )
            })}
        </div>
    )
}
