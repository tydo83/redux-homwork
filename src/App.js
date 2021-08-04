import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';
import ShoppingCart from './components/ShoppingCart';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <ItemList />
        <ShoppingCart />
      </Provider>
    </div>
  );
}

export default App;
