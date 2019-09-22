const path = require("path");

module.exports = {
	rootDir: path.resolve(__dirname),
	collectCoverage: true, // 是否收集测试时的覆盖率信息
	collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,mjs}"], // 哪些文件需要收集覆盖率信息
	coverageDirectory: "<rootDir>/test/coverage", // 输出覆盖信息文件的目录
	coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/index.jsx"], // 统计覆盖信息时需要忽略的文件
	moduleNameMapper: {
		// 主要用于与webpack的resolve.alias匹配，注意正则写法
		"^actions(.*)$": "<rootDir>/src/actions$1",
		// '^util(.*)$': '<rootDir>/src/util$1',
		"^components(.*)$": "<rootDir>/src/components$1",
		"^saga(.*)$": "<rootDir>/src/saga$1",
		"^images(.*)$": "<rootDir>/src/images$1",
		"^styles(.*)$": "<rootDir>/src/styles$1",
		"^containers(.*)$": "<rootDir>/src/containers$1"
	},
	setupFiles: ["<rootDir>/test/setupTests.js"], // 运行测试前可运行的脚本，比如注册enzyme的兼容
	testMatch: [
		// 匹配的测试文件
		"<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}",
		"<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}"
	],
	testURL:
		"https://test.com?empty=&num=0&str=str&cstr=中文&encode=%e4%b8%ad%e6%96%87", // 运行环境下的url，默认about:blank
	transform: {
		"^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
	},
	transformIgnorePatterns: [
		// 转换时需要忽略的文件
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
	]
};
