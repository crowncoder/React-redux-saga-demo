//A utity class encapsulates the fecth request

var httpUtil = {};
var baseUrl = "http://localhost:8888";

httpUtil.get = (url, params) => {
	if (params) {
		let paramsArray = [];
		Object.keys(params).forEach(key =>
			paramsArray.push(key + "=" + params[key])
		);
		if (url.search(/\?/) === -1) {
			url += "?" + paramsArray.join("&");
		} else {
			url += "&" + paramsArray.join("&");
		}
	}
	return new Promise((resolve, reject) => {
		fetch(baseUrl + url, {
			method: "GET"
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					reject({ status: response.status });
				}
			})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject({ ...err, status: -1 });
			});
	});
};

httpUtil.post = (url, data) => {
	return new Promise((resolve, reject) => {
		fetch(baseUrl + url, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json;charset=utf-8"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					reject({ status: response.status });
				}
			})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject({ ...err, status: -1 });
			});
	});
};

export default httpUtil;
