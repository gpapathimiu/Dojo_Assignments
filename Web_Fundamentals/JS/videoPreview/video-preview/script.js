function MouseIn(vid) {
    vid.play();
}

function MouseOut(vid) {
    vid.pause();
    vid.currentTime = 0;
}