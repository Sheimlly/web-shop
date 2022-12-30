function nextItemId(items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
}

export default function shopCartReducer(state = [], action) {
    switch (action.type) {
        case 'shopCart/itemAdded': {
            const duplicate = state.find(item => {
                return item.item_id === action.payload.item_id;
            })

            if(duplicate) {
                return state.map(item => {
                    if (item.item_id !== action.payload.item_id) {
                        return item;
                    }
    
                    return {
                        ...item,
                        count: item.count+=1
                    }
                })
            }

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
            return state.filter(item => item !== action.payload)
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