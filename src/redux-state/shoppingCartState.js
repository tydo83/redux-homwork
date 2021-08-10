export const ADD_TO_CART_ACTION = 'codeImmersives/addToCart';
export const REMOVE_FROM_CART_ACTION = 'codeImmersives/removeFromCart';

export const addToCartActionCreator = (item) => {
    return {
        type: ADD_TO_CART_ACTION,
        payload: {
            newItem: item,
        }
    }
}

export const initialState = {
    items: [],
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_ACTION:
            const newItem = action.payload.newItem;
            return {
                ...state,
                    items: [
                        ...state.items,
                        newItem,
                    ],
                }

        case REMOVE_FROM_CART_ACTION:
            const itemIdToRemove = action.payload.itemId;
            return {
                items: state.items.filter(item => item.id !== itemIdToRemove),
            }

        default:
            return state
    }
}