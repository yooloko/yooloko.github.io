function Stopwatch(opts) {
	var time = 0;
	var interval;
	var offset;

	var elem = opts.elem;
	var delay = opts.delay;

	function update() {
		if(this.isOn) {
			time += delta();
		}
		var formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
	}

	function delta() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	function timeFormatter(timeInMilliseconds){
		var time = new Date(timeInMilliseconds);
		// console.log('time', time);
		var hours = (time.getHours() - 2).toString();
		// console.log('hours', hours);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		if(hours.length < 2){
			hours = '0' + hours;
		}

		if(minutes.length < 2) {
			minutes = '0' + minutes;
		}

		if(seconds.length < 2){
			seconds = '0' + seconds;
		}

		while(milliseconds.length < 3) {
			milliseconds = '0' + milliseconds;
		}

		return hours + ' : ' + minutes + ' : ' + seconds + ' . ' + milliseconds;
	}

	this.isOn = false;

	this.start = function() {
		if(!this.isOn) {
			interval = setInterval(update.bind(this), 50);
			offset = Date.now();
			this.isOn = true;
		}
	};

	this.stop = function() {
		if (this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};

	this.reset = function() {
		time = 0;
		update();
		this.isOn = false;
		var removeSplit = document.body.querySelector('.splitbox');
		document.body.removeChild(removeSplit);
	};

	this.split =  function() {
		if (this.isOn){
			console.log('BOOOO!!');
			var mainDivSplit = document.createElement('div');
			mainDivSplit.classList.add("splitbox");
			var afterSplitBox = document.querySelector('.aftersplitbox');
			document.body.insertBefore(mainDivSplit, afterSplitBox);


			var divSplit = document.createElement('div'); 
			divSplit.innerHTML = timeFormatter(time);
			divSplit.classList.add("onesplit");
			var splitbox = document.querySelector('.splitbox');
			splitbox.appendChild(divSplit);
		}
	}


}

