let exec = require("child_process").exec;
class EndWebpackPlugin {
	constructor(doneCallback, failCallback) {
		// 存下在构造函数中传入的回调函数
		this.doneCallback = doneCallback;
		this.failCallback = failCallback;
	}

	apply(compiler) {
		compiler.plugin("done", stats => {
			exec("xcopy /e " + __dirname + "\\..\\..\\dist D:\\dist\\ ", () => {}); //此处可以设置服务器部署目录
			this.doneCallback(stats);
		});
		compiler.plugin("failed", err => {
			// 在 failed 事件中回调 failCallback
			this.failCallback(err);
		});
	}
}
// 导出插件
module.exports = EndWebpackPlugin;
