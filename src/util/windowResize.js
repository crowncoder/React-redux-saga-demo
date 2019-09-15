//to do screen adaption via rem

export default class WinResize {
	constructor() {
		window.addEventListener("resize", this.fn);
	}
	fn() {
		var width = document.body.clientWidth;
		if (width > 1000) {
			document.documentElement.style.fontSize = (width / 1920) * 16 + "px"; //change the root font size to adapt the screen
		}
	}
}
