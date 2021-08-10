import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ShoppingCart from './components/ShoppingCart';
import ItemList from './components/ItemList';
import Login from './components/Login'
import Header from './components/Header'
import UserPage from './components/UserPage'

function App() {
  return (
    <Router>
      <Provider store={reduxStore}>
          <div className="App">
            <div style={{marginTop: '100px'}}>
            <Header />
              <Switch>
                <Route path="/cart">
                  <ItemList />
                  <ShoppingCart />
                </Route>
                <Route path="/user">
                  <UserPage />
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
              </Switch>
            </div>
          </div>
        </Provider>
    </Router>     
  );
}

export default App;
