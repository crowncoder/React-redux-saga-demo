import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "../saga";
const sagaMiddleware = createSagaMiddleware();
export default function() {
	const store = createStore(reducers, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept("../reducers", () => {
			const nextReducer = reducers;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
