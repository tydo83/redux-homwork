// ACTIONS
export const LOG_IN_ACTION = 'codeImmersives/logIn';
export const SET_FAV_COLOR_ACTION = 'codeImmersives/setFavoriteColor';

// ACTION CREATORS
export const loginActionCreator = (authorizedUser) => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type: LOG_IN_ACTION,
            payload: {
                id: authorizedUser.id,
                userName: authorizedUser.userName,
                name: authorizedUser.name,
            },
        })
    }, 1000)
};

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
        };
    }

    if (action.type === SET_FAV_COLOR_ACTION) {
        return {
            ...state,
            favoriteColor: action.payload.color,
        };
    }

    if (!state) return null;
    return state;
};
