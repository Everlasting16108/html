function JumpBlues(url) {
	var E = new DPlayer({
		container: document.querySelectorAll("[id^='dplayer']"),
		loop: "yes",
		screenshot: "yes",
		video: {
			url: url
		},
		danmaku: {
			api: "https://api.prprpr.me/dplayer/"
		}
	});
	window.dplayers || (window.dplayers = []), window.dplayers.push(E)
}