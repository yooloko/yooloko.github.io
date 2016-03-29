var timer = document.getElementById('timer'); 
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var splitBtn = document.getElementById('split');

var watch = new Stopwatch({
	elem: timer,
	delay: 1000
});

function start() {
	watch.start();
	toggleBtn.textContent = 'Stop';
}

function stop() {
	watch.stop();
	toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function() {
  (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function(){
  watch.reset();
});

splitBtn.addEventListener('click', function(){
	watch.split();
});