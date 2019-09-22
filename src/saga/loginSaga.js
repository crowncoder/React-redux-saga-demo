import { put } from 'redux-saga/effects';
import history from '../history';
// import httpUtil from '../util/httpUtil'
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILURE } from 'actions/const';
export function* login(action) {
	try {
		//let data = yield call(httpUtil.post, '/login',action.user);  //真实环境中发起HTTP请求
		const data = { status: true };
		const status = data.status;
		if (status === true) {
			history.push('main');
			yield put({ type: LOGIN_SUCCESS, status });
		} else {
			yield put({ type: LOGIN_FAILURE, status });
		}
	} catch (error) {
		yield put({ type: LOGIN_ERROR, error });
	}
}
