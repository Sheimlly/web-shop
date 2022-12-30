import React from "react";
import { useSelector, useDispatch, connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      shopCart: state.shopCart,
      items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      increment: (data) => dispatch({ type: 'shopCart/itemCountChanged', payload: data }),
      decrement: (data) => dispatch({ type: 'shopCart/itemCountChanged', payload: data }),
      add_item: (item) => dispatch({ type: 'shopCart/itemAdded', payload: item }),
      delete_item: (item) => dispatch({ type: 'shopCart/itemRemoved', payload: item })
    };
  };
  

const ShopCart = (props) => {
    if(props.shopCart.length > 0) {
        return (
            <div>
                <h1>Shop list:</h1>
                {props.shopCart.map((item, key) => {
                    return (
                        <div key={key}>Name: {props.items.find(it => it.id === item.item_id).name} | Count: {item.count} <button onClick={() => props.decrement({id: item.item_id, count: item.count-=1})} disabled={item.count == 1 ? true : false}>-</button> <button onClick={() => props.increment({id: item.item_id, count: item.count+=1})}>+</button>| <button onClick={() => props.delete_item(item)}>Delete</button></div>
                    );
                })}
            </div>
        )
    }
}

const ShopCar = connect(mapStateToProps, mapDispatchToProps)(ShopCart);

const Frontpage = (props) => {
    return (
        <div>
            <ShopCar />
            <h1>Items:</h1>
            {props.items.map((item, key) => {
                return (
                    <div key={key}>Name: {item.name} | Color: {item.color} | Price: {item.price} | <button onClick={() => props.add_item({item_id: item.id, count: 1})}>Add to shop list</button></div>
                );
            })}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);;