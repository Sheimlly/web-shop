import shopCartReducer from "./shopList";
import itemsReducer from "./items";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    shopCart: shopCartReducer,
    items: itemsReducer
});

export default allReducers;