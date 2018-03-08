import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
import ROUTER from './router';
import store from './store';

import {autoLogin} from './js/actions/UserLogin';

(async () => {
    //记住密码
    if (!!localStorage.getItem('loginToken')) {
        let result = await autoLogin();
        let result_data = {};
        result_data['islogin'] = !!result.success;
        if (result.success)
            result_data['user'] = result.data;
        store.dispatch({
            type: 'login',
            data: result_data
        });
    }

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
                    <Route exact path="/" component={FileDownloadPage}/>
                    <Route exact path={ROUTER.FILECENTER} component={FilePersonalCenterPage}/>
                    <Route exact path={ROUTER.FILEUPLOAD} component={FileUploadPage}/>
                    <Route path={ROUTER.FILEITEM} component={FileItemPage}/>
                    <Route path={ROUTER.FILECODE} component={FileExtractCodePage}/>

                    <Route path={ROUTER.SQUAREFOUND} component={SqaureFoundPage}/>

                    <Route path={ROUTER.LOGIN} component={UserLoginPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>,
        App
    );
})();



