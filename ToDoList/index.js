import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import inputReducer from './store/reducers/input';
import todolistReducer from './store/reducers/todolist';

const rootReducer = combineReducers({
    inputs: inputReducer,
    todoList: todolistReducer
});

const myStore = createStore(rootReducer);

const app = <Provider store={myStore}>
                <App />
            </Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
