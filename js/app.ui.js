window.app = window.app || {};

(function(app) {
	
	var countText = null,
		increaseButton = null,
		decreaseButton = null;
	
	function increaseCount() {
		var newCount = parseInt(countText.innerHTML) + 1;
		countText.innerHTML = newCount;
	}
	
	function decreaseCount() {
		var newCount = parseInt(countText.innerHTML) - 1;
		countText.innerHTML = newCount;
	}
	
	function onIncreaseButtonClick() {
		increaseCount()
	}
	
	function onDecreaseButtonClick() {
		decreaseCount()
    }
	
	function bindUiEvents() {
		increaseButton.addEventListener('click', onIncreaseButtonClick);
		decreaseButton.addEventListener('click', onDecreaseButtonClick);
	}
	
	function addRotaryEventHandler() {
		document.addEventListener('rotarydetent', function(ev) {
		    var direction = ev.detail.direction;
		    if (direction == 'CW') {
		    	increaseCount();
		    } else if (direction == 'CCW') {
		    	 decreaseCount();
		    }
		});
	}
	
	function updateBadgeInBackground() {
		if (countText) {
			app.model.updateBadgeCount(countText.innerHTML);
		}
	}
	
	function init() {
		countText = document.getElementById('count-number');
		increaseButton = document.getElementById("increase-btn");
		decreaseButton = document.getElementById("decrease-btn");
		countText.innerText = app.model.getCurrentBadgeCount();
		setInterval(updateBadgeInBackground, 200);
		bindUiEvents();
		addRotaryEventHandler();
	}
	
	app.ui = {
		init: init
	};
	
}(window.app));