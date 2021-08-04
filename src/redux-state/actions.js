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
