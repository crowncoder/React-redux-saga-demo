 import { put } from 'redux-saga/effects'
 import { browserHistory } from 'react-router'
 import httpUtil from 'util/httpUtil'
 import {LOGIN_SUCCESS,LOGIN_ERROR,LOGIN_FAILURE} from 'actions/const'
import 'babel-polyfill';
 export function* login(action) {
  try{
    //let data = yield call(HTTPUtil.post, '/login',action.user);  //真实环境中发起HTTP请求
    let data={'status':true}
    let status=data.status;
    if(status===true){
        sessionStorage.setItem('loginStatus','true');
        browserHistory.push('/main');
        yield put({ type:LOGIN_SUCCESS,status})
        }else{
        yield put({ type:LOGIN_FAILURE,status})
    }
  }catch(error) {
    yield put({type:LOGIN_ERROR, error})
  }
 }
