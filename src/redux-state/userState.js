// ACTIONS
export const LOG_IN_ACTION = 'codeImmersives/logIn';
export const SET_FAV_COLOR_ACTION = 'codeImmersives/setFavoriteColor';
export const SEARCH_WEATHER = 'codeImmersives/searchWeather'
export const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
export const REACT_APP_API_KEY = '18b8538e5eb115cc2512b683ed9f15cf'

// ACTION CREATORS
export const loginActionCreator = (authorizedUser) => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type: LOG_IN_ACTION,
            payload: {
                id: authorizedUser.id,
                userName: authorizedUser.userName,
                name: authorizedUser.name,
                city: authorizedUser.city
            },
        })
    }, 1000)
};

export const weatherApiCreator = (authorizedUser) => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type: SEARCH_WEATHER,
            payload: {
                city: authorizedUser.city
            }
        })
    }, 1000)
}

export const setFavoriteColorActionCreator = (color) => {
    return {
        type: SET_FAV_COLOR_ACTION,
        payload: {
            color,
        },
    }
};

export const initialState = null;

// REDUCER
export const reducer = (state, action) => {
    if (action.type === LOG_IN_ACTION) {
        return {
            id: action.payload.name,
            userName: action.payload.name,
            name: action.payload.name,
            city: action.payload.city,
        };
    }

    if (action.type === SET_FAV_COLOR_ACTION) {
        return {
            ...state,
            favoriteColor: action.payload.color,
        };
    }

    if (action.type === SEARCH_WEATHER) {
        return {
            city: action.payload.city,
        }
    }

    if (!state) return null;
    return state;
};
