import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFavoriteColorActionCreator, weatherApiCreator } from '../redux-state/userState';

const UserPage = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [favColor, setFavColor] = useState('red');
    const [city, setCity] = useState('Seoul')

    const handleSetColor = () => {
        dispatch(setFavoriteColorActionCreator(favColor));
    };

    const weatherApi = () => {
        dispatch(weatherApiCreator(city));
    }


    if (!user) {
        return <h1>No user</h1>
    }

    return (
        <div>
            {console.log(user)}
            <h1>Hi, {user.name}</h1>
            <h3>from {user.city}</h3>
            <input
                placeholder="favorite color"
                value={favColor}
                onChange={event => setFavColor(event.target.value)}
            />
            <button onClick={handleSetColor}>Set</button>
            <input
                placeholder="City"
                value={city}
                onChange={event => setCity(event.target.value)}
            />
            <button onClick={weatherApi}>Set</button>
        </div>
    )
}

export default UserPage;