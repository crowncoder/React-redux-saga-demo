import { takeEvery } from 'redux-saga/effects';
import { LOGIN } from 'actions/const';
import { login } from './loginSaga';

export default function* rootSaga() {
	yield takeEvery(LOGIN, login);
}
