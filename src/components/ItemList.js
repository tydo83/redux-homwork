import React from 'react'
import './ItemList.css'
import { useDispatch } from 'react-redux';
import { addToCartActionCreator } from '../redux-state/shoppingCartState';

export default function ItemList() {
    const Items = [
        {
            id: '1',
            name: "Chicken Breast",
            price: 20
        },
        {
            id: '2',
            name: "Oatmeal Milk",
            price: 4
        },
        {
            id: '3',
            name: "Doritos",
            price: 3.99
        }
    ];

    const dispatch = useDispatch();

    return (
        <div className="item-card">
            <h3>Grocery List</h3>
            {Items.map(item => {
                return(
                    <div className="item-list">
                        {item.name} - ${item.price}
                    <button style={{marginLeft:"10px"}}onClick={() => dispatch(
                        addToCartActionCreator(item)
                    )}>
                        ADD
                    </button>
                    </div>
                )})}
        </div>
    )
}
