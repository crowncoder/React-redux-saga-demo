import loginContainer from "./containers/routes";
import loadable from "@loadable/component";
const MainComponent = loadable(() =>
	import(/* webpackChunkName: "main" */ "./containers/routes/main")
);
const routes = [
	{
		path: "/",
		component: loginContainer,
		exact: true
	},
	{
		path: "/main",
		component: MainComponent,
		exact: true
	}
];

export default routes;
