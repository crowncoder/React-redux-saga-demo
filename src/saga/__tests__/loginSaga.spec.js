import { put } from 'redux-saga/effects';
import { login } from '../loginSaga';
import { LOGIN_SUCCESS } from 'actions/const';
test('login Saga test', done => {
	const generator = login({ user: 'jason' });
	expect(generator.next().value).toStrictEqual(
		put({ type: LOGIN_SUCCESS, status: true })
	);
	expect(generator.next().done).toBe(true);
	done();
});
