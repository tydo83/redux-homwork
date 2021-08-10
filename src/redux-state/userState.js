import axios from 'axios'

// ACTIONS
export const LOG_IN_ACTION = 'codeImmersives/logIn';
export const SET_FAV_COLOR_ACTION = 'codeImmersives/setFavoriteColor';
export const SEARCH_WEATHER = 'codeImmersives/searchWeather'
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
                city: authorizedUser.city,
            },
        })
    }, 1000)
};

export const weatherApiCreator = (weather) => async (dispatch, getState) => {
    let weather;
    let city = getState().user.city
    console.log(city);
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}`);
            weather =  response.data.weather[0].description;
        } catch (error) {
            console.error(error);
        }
        dispatch({
            type: SEARCH_WEATHER,
            payload: {
                weather
            }
        })
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
        const weather = action.payload.weather
        return {
            ...state,
            weather,
        }
    }

    if (!state) return null;
    return state;
};
