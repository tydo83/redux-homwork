import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { initialState as shoppingCartInitialState, reducer as shoppingCartReducer } from './shoppingCartState';
import { initialState as userInitialState, reducer as userReducer } from './userState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    user: userReducer,
})

const initialState = {
    shoppingCart: shoppingCartInitialState,
    user: userInitialState,
}

export const reduxStore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
)

