window.app = window.app || {};

(function(app) {
	
	var countText = null,
		increaseButton = null,
		decreaseButton = null
	
//	function increaseCount() {
//		var newCount = parseInt(countText.innerHTML) + 1;
//		//countText.style.fontSize = "20px";
//		countText.innerHTML = newCount;
//	}
//	
//	function decreaseCount() {
//		var newCount = parseInt(countText.innerHTML) - 1;
//		countText.innerHTML = newCount;
//	}
	
	function onIncreaseButtonClick() {
		var count = app.model.getCurrentCount();
		var newCount = +(count) + 1;
		app.model.updateCount(newCount);
		updateCount(newCount)
	}
	
	function onDecreaseButtonClick() {
//		console.log(screen.height)
		//console.log(tizen.systeminfo.getCapability("http://tizen.org/feature/systemInfoDisplay/resolutionWidth"))
		var count = app.model.getCurrentCount();
		var newCount = +(count) - 1
		app.model.updateCount(newCount);
		updateCount(newCount)
    }
	
	function updateCount(count) {
		countText.innerHTML = count;
	}
	
	function bindUiEvents() {
		increaseButton.addEventListener('click', onIncreaseButtonClick);
		decreaseButton.addEventListener('click', onDecreaseButtonClick);
	}
	
	function addRotaryEventHandler() {
		document.addEventListener('rotarydetent', function(ev) {
		    var direction = ev.detail.direction;
		    if (direction == 'CW') {
		    	onIncreaseButtonClick();
		    } else if (direction == 'CCW') {
		    	onDecreaseButtonClick();
		    }
		});
	}
	
//	function updateBadgeInBackground() {
//		if (countText) {
//			app.model.updateBadgeCount(countText.innerHTML);
//		}
//	}
//	
	function init() {
		countText = document.getElementById('count-number');
		increaseButton = document.getElementById("increase-btn");
		decreaseButton = document.getElementById("decrease-btn");
		console.log(app.model.getCurrentCount())
		bindUiEvents();
		countText.innerHTML = app.model.getCurrentCount();
//		setInterval(updateBadgeInBackground, 200);
		addRotaryEventHandler();
	}
	
	app.ui = {
		init: init
	};
	
}(window.app));