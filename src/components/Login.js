import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../databaseMock';
import { loginActionCreator } from '../redux-state/userState';

const authUser = (users, userName, password) => {
    const matchingUser = users.find(user => {
        if (user.userName === userName && user.pass === password) {
            return true;
        }
        return false;
    })

    if (matchingUser) {
        return matchingUser;
    }

    return undefined;
};

const LogInPage = () => {
    const users = fetchUsers();
    // Input elements
    const [{ name, password }, setState] = useState({});
    const setName = (input) => setState({ name: input, password });
    const setPassword = (input) => setState({ name, password: input });
    const dispatch = useDispatch();

    const [error, setError] = useState();

    const onSubmit = () => {
        const authorizedUser = authUser(users, name, password);
        console.log('authorizedUser: ', authorizedUser);


        if (authorizedUser) {
            dispatch(loginActionCreator(authorizedUser))
            console.log(authorizedUser);
        } else {
            console.error("wrong username or password");
            setError("wrong username or password")
        }

    };

    return (
        <div>
            <input placeholder="Username" onChange={({ target: { value } }) => setName(value)} />
            <input type="password" placeholder="password" onChange={({ target: { value } }) => setPassword(value)} />
            <button onClick={onSubmit}>Log in</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default LogInPage;
