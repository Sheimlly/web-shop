import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch, connect } from 'react-redux';

/*
            TODO
    add mapstatetoprops
*/

function ShopCart() {
    const shopCart = useSelector(state => state.shopCart);
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    function handleDelete(type, payload) {
        dispatch({type: type, payload: payload});
    }

    useEffect(() => {
    }, [handleDelete]);

    return (
        <div>
            <h1>Shop list:</h1>
            {shopCart && shopCart.map(item => {
                return (
                    <div>Name: {items.find(it => it.id === item.item_id).name} | Count: {item.count} | <button onClick={() => handleDelete('shopCart/itemRemoved', item)}>Delete</button></div>
                );
            })}
        </div>
    )
}

export default function Frontpage() {
    const shopCart = useSelector(state => state.shopCart);
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    return (
        <div>
            <ShopCart />
            <h1>Items:</h1>
            {items.map(item => {
                return (
                    <div>Name: {item.name} | Color: {item.color} | Price: {item.price} | <button onClick={() => dispatch({type: 'shopCart/itemAdded', payload: {item_id: item.id, count: 1}})}>Add to shop list</button></div>
                );
            })}
        </div>
    );
}