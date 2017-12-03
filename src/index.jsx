import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import FileIndex from './containers/FileIndex';

import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);


let App = document.createElement('div');
document.body.appendChild(App);
App.style.height = 'inherit';
App.style.width = 'inherit';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/* 添加对应的router */}
                <Route exact path="/" component={FileIndex}/>
                <Route path="/file" component={FileIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    App
);
