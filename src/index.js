import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import { renderRoutes } from 'react-router-config';
import configureStore from './stores';

import 'styles/style.css';
const store = configureStore();
const renderApp = () => {
	const routes = require('./routes').default;
	render(
		<Provider store={store}>
			<Router history={history}>
				<Switch>{renderRoutes(routes)}</Switch>
			</Router>
		</Provider>,
		document.getElementById('app')
	);
};
renderApp();
if (module.hot) {
	module.hot.accept('./routes', () => {
		renderApp();
	});
}
