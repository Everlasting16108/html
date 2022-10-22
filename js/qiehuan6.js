function JumpBlues(url) {
	var E = new DPlayer({
// 		container: document.getElementById("dplayer4"),
		container: document.querySelectorAll("[id^='dplayer']")[0],
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
