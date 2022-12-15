const initialState = [
    { id: 0, name: 'item 1', color: 'red', price: 22 },
    { id: 1, name: 'item 2', color: 'magenta', price: 33.21 },
    { id: 2, name: 'item 3', color: 'blue', price: 50 },
]

function nextItemId(items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
}

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'items/itemAdded': {
            return [
                ...state,
                {
                    id: nextItemId(state),
                    color: action.payload.color,
                    price: action.payload.price
                }
            ]
        }
        case 'items/itemRemoved': {
            return state.map(item => {
                if (item !== action.payload) {
                    return item;
                }
            })
        }
        default:
            return state
    }
}