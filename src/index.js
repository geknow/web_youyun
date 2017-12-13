import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import FileIndex from './containers/FileIndex';
import FileItem from './containers/FileItem';
import FileExtractCode from './containers/FileExtractCode';
import FileUpload from './containers/FileUpload';
import HomePage from './containers/HomePage';
import store from './store';



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
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/file/" component={FileIndex}/>
                <Route exact path="/file/upload" component={FileUpload}/>
                <Route path="/file/index" component={FileItem}/>
                <Route path="/file/code" component={FileExtractCode}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    App
);


