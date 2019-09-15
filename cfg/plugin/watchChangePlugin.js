var fs = require("fs");
var path = require("path");
class WatchChangePlugin {
	apply(compiler) {
		compiler.plugin("watch-run", (watching, callback) => {
			const changedFiles = watching.watchFileSystem.watcher.mtimes;
			for (let key in changedFiles) {
				let content = "modified" + " " + key + "\n";
				fs.writeFile("log.txt", content, { flag: "a" }, function(err) {
					if (err) {
						return console.error(err);
					}
				});
			}
			callback();
		});
	}
}

module.exports = WatchChangePlugin;
