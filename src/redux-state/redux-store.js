import { createStore, compose } from 'redux'
import { shoppingCartReducer } from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    shoppingCart: {
        items: [],
    }
}

export const reduxStore = createStore(
    shoppingCartReducer,
    initialState,
    composeEnhancers(),
)

