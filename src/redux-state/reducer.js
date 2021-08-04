import { ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION } from "./actions";

export const shoppingCartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART_ACTION:
            const newItem = action.payload.newItem;
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    items: [
                        ...state.shoppingCart.items,
                        newItem,
                    ],
                }
            }
        case REMOVE_FROM_CART_ACTION:
            const itemIdToRemove = action.payload.itemId;
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    items: state.shoppingCart.items.filter(item => item.id !== itemIdToRemove),
                }
            }
        default:
            return state
    }
}