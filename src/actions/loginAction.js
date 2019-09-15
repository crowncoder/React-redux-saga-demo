import { LOGIN } from "./const";
const actions = {
	login: function(user) {
		return {
			type: LOGIN,
			user
		};
	}
};
export default actions;
