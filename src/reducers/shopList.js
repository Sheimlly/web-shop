function nextItemId(items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
}

export default function shopCartReducer(state = [], action) {
    switch (action.type) {
        case 'shopCart/itemAdded': {
            return [
                ...state,
                {
                    id: nextItemId(state),
                    item_id: action.payload.item_id,
                    count: action.payload.count
                }
            ]
        }
        case 'shopCart/itemRemoved': {
            return state.map(item => {
                if (item !== action.payload) {
                    return item;
                }
            })
        }
        case 'shopCart/itemCountChanged': {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                }

                return {
                    ...item,
                    count: action.payload.count
                }
            })
        }
        default:
            return state
    }
}