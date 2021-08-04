1.What is redux and what is it used for?
##Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments

2.Explain the “Provider’ component from “react-redux”.
##The provider component makes the Redux store available to any nested components that need to access the Redux store. Since any React component in a React Redux app can be connected to the store, most applications will render a provider at the top level, with the entire app's component tree inside of it.

3. What is the redux store object?
##A store is an immutable object tree in Redux. A store is a state container which holds the application's state. Redux can have only a single store in your application

4. What do you need the redux store object for?
##reducer, initial state, and composer

5.How do you create a redux store?
##use createStore from react-redux module

6.What is the redux reducer?
##It is a pure function that takes an action and the previous state of the application and returns the new state.

7.What arguments does the redux reducer take?
##previous state and action

8.When does the reducer function run? (When is it called?).
##It is called after a function dispatches action 

9.What does the reducer function return?
##It returns a new state result.
