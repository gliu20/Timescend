/*
 * For gapless looping
 */

function loop (src,bufferStart,bufferEnd) {
	let audio = new Audio(src);
	
	bufferStart = bufferStart || 0;
	bufferEnd = bufferEnd || 0;
	
	audio.loop = true;
	audio.play();
	audio.addEventListener("timeupdate", function (e) {
		if (audio.currentTime > audio.duration - bufferEnd) {
			audio.currentTime = bufferStart;
		}
	})
	
	return audio;
}
