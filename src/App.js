import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Routes from './Routes';
import Principal from './components/Principal'
import reducer from './reducers/';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {

    render(){
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}

export default App;
