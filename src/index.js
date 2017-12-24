import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import {
    FilePersonalCenterPage,
    FileItemPage,
    FileUploadPage,
    FileDownloadPage,
    FileExtractCodePage,
    SqaureFoundPage,
    UserLoginPage
} from './js/views';

import store from './store';


let App = document.createElement('div');
document.body.appendChild(App);
App.style.height = 'inherit';
App.style.width = 'inherit';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                {/*目前url只是为了方便测试*/}
                {/* 添加对应的router */}
                <Route exact path="/" component={FileDownloadPage}/>
                <Route exact path="/file/center" component={FilePersonalCenterPage}/>
                <Route exact path="/file/upload" component={FileUploadPage}/>
                <Route path="/file/item" component={FileItemPage}/>
                <Route path="/file/code" component={FileExtractCodePage}/>

                <Route path={'/square/found'} component={SqaureFoundPage}/>

                <Route path={'/user/login'} component={UserLoginPage}/>
            </Switch>
        </HashRouter>
    </Provider>,
    App
);


