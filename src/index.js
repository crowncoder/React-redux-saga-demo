import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import { renderRoutes } from "react-router-config";
import configureStore from "./stores";
import routes from "./routes";
const store = configureStore();
render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>{renderRoutes(routes)}</Switch>
		</Router>
	</Provider>,
	document.getElementById("app")
);
