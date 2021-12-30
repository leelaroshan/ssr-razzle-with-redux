import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Counter from './Components/Counter';
import ProductList from './Components/ProductList';
import { Provider } from 'react-redux';
import store from './Store';



const App = () => (
    <Provider store={store} > 
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path='/products' component={ProductList} />
    <Route exact={true} path="/counter" component={Counter} />
    
    </Switch>
     </Provider>
);

export default App;
