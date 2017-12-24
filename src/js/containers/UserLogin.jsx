/**
 * Created by GEK on 2017/12/3.
 */

import {connect} from 'react-redux';
import React from 'react';
import {UserLoginComponent} from '../components/index';
import {login, autoLogin} from '../actions/UserLogin';


export default connect(
    (state) => {
        return {
            ...state.UserLoginReducer
        };
    },
    (dispatch) => {
        return {
            login: async (data) => {
                let result = await login(data);
                let result_data = {};
                result_data['islogin'] = !!result.success;
                if (result.success)
                    result_data['user'] = result.data;
                dispatch({
                    type: 'login',
                    data: result_data
                });

            },
            changeValue: (data) => {
                dispatch({
                    type: 'changeValue',
                    data
                });
            }
        };
    }
)(UserLoginComponent);

