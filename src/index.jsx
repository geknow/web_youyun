import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {MainHeader} from './components/index';

console.log(MainHeader);
// import rootReducer from './reducers/index';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk, logger)
// );



let App = document.createElement('div');
document.body.appendChild(App);
ReactDOM.render(
    <MainHeader/>,
    App
);
// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <Switch>
//                 {/*todo 需要添加component*/}
//                 {/*<Route exact path="/" component={}/>*/}
//                 {/*<Route path="/haha" component={}/>*/}
//             </Switch>
//         </BrowserRouter>
//     </Provider>,
//     App
// );
