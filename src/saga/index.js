import {takeEvery} from 'redux-saga/effects'
import {LOGIN} from 'actions/const'
import {login} from './loginSaga'
import 'babel-polyfill';

function* watchFetchData() {
    yield takeEvery(LOGIN, login)
}

export default function* rootSaga() {
  yield [
    watchFetchData()
  ]
}