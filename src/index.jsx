import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import FileIndex from './containers/FileIndex';
import FileItem from './containers/FileItem';
import FileUpload from './containers/FileUpload';

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
                {/*目前url只是为了方便测试*/}
                {/* 添加对应的router */}
                <Route exact path="/" component={FileIndex}/>
                <Route path="/fileItem" component={FileItem}/>
                <Route path="/FileUpload" component={FileUpload}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    App
);
